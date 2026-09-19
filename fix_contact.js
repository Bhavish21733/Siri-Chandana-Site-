const fs = require('fs');

let content = fs.readFileSync('src/app/contact/page.tsx', 'utf8');

if (!content.includes('import Image from "next/image";')) {
  content = content.replace('import type { Metadata } from "next";', 'import type { Metadata } from "next";\nimport Image from "next/image";\nimport Link from "next/link";');
}

fs.writeFileSync('src/app/contact/page.tsx', content);

let privacyContent = fs.readFileSync('src/app/privacy-policy/page.tsx', 'utf8');
let termsContent = fs.readFileSync('src/app/terms-and-conditions/page.tsx', 'utf8');
