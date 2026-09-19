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
    <div className="bg-white min-h-screen pt-16 md:pt-28">
      {/* HEADER SECTION */}
      <section data-aos="fade-up" className="border-b border-gray-100 pb-6 pt-0 md:pb-8 md:pt-8">
        <div className="container-custom max-w-6xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-navy mb-6 leading-tight max-w-4xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-500">
            <span>Published: {post.date}</span>
            <span className="hidden sm:inline">•</span>
            <span>Category: {post.category}</span>
            <span className="hidden sm:inline">•</span>
            <span>Read Time: 4 mins</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT & SIDEBAR */}
      <section data-aos="fade-up" className="py-8 md:py-12">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* LEFT COLUMN: ARTICLE */}
            <div className="lg:col-span-2">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-10 shadow-sm border border-gray-100">
                <Image src={post.image} alt={post.title} fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 66vw" />
              </div>
              
              <article 
                className="prose max-w-none prose-headings:text-brand-navy prose-a:text-brand-aqua hover:prose-a:text-brand-navy"
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
                <a href="https://wa.me/919133432885?text=Hello,%20I%20would%20like%20to%20enquire%20about%20water%20tank%20cleaning%20services." target="_blank" rel="noopener noreferrer" className="block text-center bg-[#155280] text-white font-bold py-3 px-4 rounded hover:bg-[#0f3d61] transition-colors text-sm">
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
