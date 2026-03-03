import { Shield, Clock, Recycle, ThumbsUp, DollarSign } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    label: "Fully Insured",
  },
  {
    icon: Clock,
    label: "Same-Day Service",
  },
  {
    icon: DollarSign,
    label: "Transparent Pricing",
  },
  {
    icon: Recycle,
    label: "Eco-Friendly Disposal",
  },
  {
    icon: ThumbsUp,
    label: "Free Estimates",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-brand-cream border-y border-gray-200">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-14">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2.5"
            >
              <item.icon className="w-5 h-5 text-brand-green flex-shrink-0" />
              <span className="text-sm font-semibold text-brand-black whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
