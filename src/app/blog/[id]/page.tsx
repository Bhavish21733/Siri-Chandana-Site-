import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";

export function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const post = blogs.find((p) => p.id === resolvedParams.id);
  if (!post) return { title: 'Post Not Found' };
  
  return {
    title: `${post.title} | Siri Chandana Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const post = blogs.find((p) => p.id === resolvedParams.id);
  
  if (!post) {
    notFound();
  }

  // Get other recent articles (excluding current one)
  const recentArticles = blogs.filter(p => p.id !== post.id).slice(0, 3);

  // Very basic Markdown parsing for the content
  const htmlContent = post.content
    .split('\n\n')
    .map(paragraph => {
      if (paragraph.startsWith('### ')) {
        return `<h2 class="text-xl font-bold text-brand-navy mt-10 mb-4">${paragraph.replace('### ', '')}</h2>`;
      }
      if (paragraph.startsWith('* ')) {
        const items = paragraph.split('\n').map(item => {
          const content = item.replace('* ', '');
          const parts = content.split('**');
          if (parts.length > 2) {
             return `<li class="mb-2"><strong class="text-brand-navy">${parts[1]}</strong>${parts[2]}</li>`;
          }
          return `<li class="mb-2">${content}</li>`;
        }).join('');
        return `<ul class="list-disc pl-6 mb-6 text-gray-700 leading-relaxed space-y-2 text-base">${items}</ul>`;
      }
      return `<p class="mb-6 text-gray-700 leading-relaxed text-base">${paragraph}</p>`;
    })
    .join('');

  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section data-aos="fade-up" className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B3D] via-[#0B1B3D]/80 to-[#0B1B3D]/30"></div>
          <div className="absolute inset-0 bg-[#0B1B3D]/40"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="block text-brand-aqua font-bold text-sm tracking-widest uppercase mb-4">
              {post.category} &nbsp;•&nbsp; {post.date} &nbsp;•&nbsp; 4 Min Read
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-[1.15]">
              {post.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>

            <div className="flex flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mt-8">
              <Link 
                href="/contact" 
                className="flex-1 sm:flex-none text-center bg-[#0ea5e9] text-white font-bold py-3 px-2 sm:px-8 rounded hover:bg-[#0284c7] transition-colors text-sm sm:text-base whitespace-nowrap"
              >
                <span className="sm:hidden">Book Inspection</span>
                <span className="hidden sm:inline">Book an Inspection</span>
              </Link>
              <a 
                href="tel:+919133432885" 
                className="flex-1 sm:flex-none text-center bg-transparent border-2 border-white/80 text-white font-bold py-2.5 px-2 sm:px-8 rounded hover:bg-white/10 transition-colors text-sm sm:text-base whitespace-nowrap"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT & SIDEBAR */}
      <section data-aos="fade-up" className="py-12 md:py-16">
        <div className="container-custom max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* LEFT COLUMN: ARTICLE */}
            <div className="lg:col-span-2">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-10 shadow-sm border border-gray-100">
                <Image src={post.image} alt={post.title} fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 66vw" />
              </div>
              <article 
                className="prose max-w-none prose-lg prose-headings:text-brand-navy prose-a:text-brand-aqua hover:prose-a:text-brand-navy"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            </div>

            {/* RIGHT COLUMN: SIDEBAR */}
            <div className="lg:col-span-1 space-y-8">
              
              {/* Widget 1: Services CTA */}
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-brand-navy mb-4 border-b-2 border-brand-aqua pb-2 inline-block">Siri Chandana Services</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  We provide professional, hygiene-focused cleaning services for all types of water storage tanks. Save your property from dirt and bacteria.
                </p>
                <Link href="/contact" className="block text-center bg-[#3b82f6] text-white font-bold py-3 px-4 rounded hover:bg-blue-600 transition-colors text-sm">
                  Book an Inspection
                </Link>
              </div>

              {/* Widget 2: Recent Articles */}
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-brand-navy mb-6 border-b-2 border-brand-aqua pb-2 inline-block">Recent Articles</h3>
                <div className="space-y-6">
                  {recentArticles.map((article) => (
                    <Link href={`/blog/${article.id}`} key={article.id} className="flex gap-4 group">
                      <div className="relative w-20 h-16 rounded overflow-hidden shrink-0">
                        <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform" sizes="80px" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="text-sm font-bold text-brand-navy leading-tight mb-1 group-hover:text-brand-aqua transition-colors line-clamp-2">
                          {article.title}
                        </h4>
                        <span className="text-xs text-brand-aqua font-semibold">{article.category}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Widget 3: WhatsApp CTA */}
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-brand-navy mb-4 border-b-2 border-brand-aqua pb-2 inline-block">Enquire on WhatsApp</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Send our team a WhatsApp message to get an instant estimate for your water tank size.
                </p>
                <a href="https://wa.me/919133432885?text=Hi%20Siri%20Chandana,%20I%20would%20like%20to%20enquire%20about%20your%20water%20tank%20cleaning%20services." target="_blank" rel="noopener noreferrer" className="block text-center bg-[#155280] text-white font-bold py-3 px-4 rounded hover:bg-[#0f3d61] transition-colors text-sm">
                  Chat With Us
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
