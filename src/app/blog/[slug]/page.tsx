import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Phone } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import CTABanner from "@/components/CTABanner";
import SchemaMarkup from "@/components/SchemaMarkup";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://completejunkremoval.ca/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Complete Junk Removal",
    },
    publisher: {
      "@type": "Organization",
      name: "Complete Junk Removal",
      logo: {
        "@type": "ImageObject",
        url: "https://completejunkremoval.ca/images/logo-full.png",
      },
    },
    description: post.metaDescription,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://completejunkremoval.ca/blog/${post.slug}`,
    },
  };

  // Simple markdown-to-HTML conversion for MDX content
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const html: string[] = [];
    let inList = false;

    for (const line of lines) {
      const trimmed = line.trim();

      if (trimmed.startsWith("### ")) {
        if (inList) { html.push("</ul>"); inList = false; }
        html.push(`<h3 class="font-heading text-xl font-bold text-brand-black mt-8 mb-3 tracking-heading">${trimmed.slice(4)}</h3>`);
      } else if (trimmed.startsWith("## ")) {
        if (inList) { html.push("</ul>"); inList = false; }
        html.push(`<h2 class="font-heading text-2xl font-bold text-brand-black mt-10 mb-4 tracking-heading">${trimmed.slice(3)}</h2>`);
      } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        if (!inList) { html.push('<ul class="list-disc pl-6 space-y-2 my-4">'); inList = true; }
        const text = trimmed.slice(2).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        html.push(`<li class="text-gray-600">${text}</li>`);
      } else if (trimmed === "") {
        if (inList) { html.push("</ul>"); inList = false; }
      } else {
        if (inList) { html.push("</ul>"); inList = false; }
        const text = trimmed
          .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
          .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-brand-green hover:text-brand-green-light underline">$1</a>');
        html.push(`<p class="text-gray-600 leading-relaxed mb-4">${text}</p>`);
      }
    }
    if (inList) html.push("</ul>");
    return html.join("\n");
  };

  return (
    <>
      <SchemaMarkup schema={articleSchema} />

      {/* Hero */}
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-brand-green-light transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-4">
              {post.category && (
                <span className="text-xs font-bold uppercase tracking-wider text-brand-green-light bg-brand-green-light/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
              )}
              <span className="flex items-center gap-1.5 text-sm text-gray-400">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-CA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-heading">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <article
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
          />

          {/* Author / CTA Box */}
          <div className="mt-12 bg-brand-cream rounded-2xl p-8 text-center">
            <h3 className="font-heading text-xl font-bold mb-2">
              Need Junk Removal or Demolition Services?
            </h3>
            <p className="text-gray-600 mb-6">
              Complete Junk Removal serves Grand Bend, London, and all of
              Southwestern Ontario. Get a free, no-obligation estimate today.
            </p>
            <a
              href="tel:5198709136"
              className="btn-primary text-base px-8 py-4"
            >
              <Phone className="w-5 h-5" />
              Call 519-870-9136
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
