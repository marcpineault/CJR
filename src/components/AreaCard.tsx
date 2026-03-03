import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

interface AreaCardProps {
  slug: string;
  city: string;
}

export default function AreaCard({ slug, city }: AreaCardProps) {
  return (
    <Link
      href={`/areas/${slug}`}
      className="card group flex items-center gap-4"
    >
      <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green/20 transition-colors">
        <MapPin className="w-5 h-5 text-brand-green" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-heading text-base font-bold text-brand-black">
          {city}
        </h3>
        <p className="text-sm text-gray-500">Junk Removal & Demolition</p>
      </div>
      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-brand-green transition-colors flex-shrink-0" />
    </Link>
  );
}
