import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Home,
  Building2,
  TreePine,
  Hammer,
  HardHat,
  Truck,
  Package,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Home,
  Building2,
  TreePine,
  Hammer,
  HardHat,
  Truck,
  Package,
};

interface ServiceCardProps {
  slug: string;
  title: string;
  description: string;
  icon: string;
}

export default function ServiceCard({
  slug,
  title,
  description,
  icon,
}: ServiceCardProps) {
  const Icon = iconMap[icon] || Package;

  return (
    <Link
      href={`/services/${slug}`}
      className="card group flex flex-col"
    >
      <div className="w-12 h-12 rounded-lg bg-brand-green/10 flex items-center justify-center mb-4 group-hover:bg-brand-green/20 transition-colors">
        <Icon className="w-6 h-6 text-brand-green" />
      </div>
      <h3 className="font-heading text-lg font-bold text-brand-black mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed flex-1">
        {description}
      </p>
      <div className="flex items-center gap-1 text-brand-green font-semibold text-sm mt-4 group-hover:gap-2 transition-all">
        Learn More
        <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  );
}
