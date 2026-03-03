import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category?: string;
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  date,
  category,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="card group flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        {category && (
          <span className="text-xs font-bold uppercase tracking-wider text-brand-green bg-brand-green/10 px-2.5 py-1 rounded-full">
            {category}
          </span>
        )}
        <span className="flex items-center gap-1.5 text-xs text-gray-400">
          <Calendar className="w-3.5 h-3.5" />
          {date}
        </span>
      </div>
      <h3 className="font-heading text-lg font-bold text-brand-black mb-2 group-hover:text-brand-green transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed flex-1">
        {excerpt}
      </p>
      <div className="flex items-center gap-1 text-brand-green font-semibold text-sm mt-4 group-hover:gap-2 transition-all">
        Read More
        <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  );
}
