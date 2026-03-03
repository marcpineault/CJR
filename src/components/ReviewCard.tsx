import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  rating: number;
  text: string;
  location: string;
  service?: string;
}

export default function ReviewCard({
  name,
  rating,
  text,
  location,
  service,
}: ReviewCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-600"
            }`}
          />
        ))}
      </div>
      <p className="text-gray-300 text-sm leading-relaxed mb-4">
        &ldquo;{text}&rdquo;
      </p>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white font-semibold text-sm">{name}</p>
          <p className="text-gray-500 text-xs">{location}</p>
        </div>
        {service && (
          <span className="text-xs text-brand-green-light bg-brand-green-light/10 px-2.5 py-1 rounded-full">
            {service}
          </span>
        )}
      </div>
    </div>
  );
}
