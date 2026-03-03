import { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import CTABanner from "@/components/CTABanner";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Junk Removal Tips & Guides",
  description:
    "Helpful tips, guides, and advice on junk removal, demolition, estate cleanouts, and more from Complete Junk Removal in Grand Bend, Ontario.",
  alternates: {
    canonical: "https://completejunkremoval.ca/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-green-light mb-3">
              Blog
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-heading">
              Tips, Guides & Insights
            </h1>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl">
              Helpful advice on junk removal, demolition, estate cleanouts, and
              keeping your property clutter-free.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={new Date(post.date).toLocaleDateString("en-CA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                category={post.category}
              />
            ))}
          </div>
          {posts.length === 0 && (
            <p className="text-center text-gray-500 py-12">
              Blog posts coming soon. Check back for helpful tips and guides.
            </p>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
