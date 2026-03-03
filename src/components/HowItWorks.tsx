import { Phone, Camera, Truck } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Phone,
    title: "Call or Text Us",
    description:
      "Give us a call at 519-870-9136 or send us a text with details about what you need removed. We respond quickly.",
  },
  {
    number: "2",
    icon: Camera,
    title: "Get Your Free Quote",
    description:
      "Send us a photo or we will come out for a free on-site estimate. Our pricing is transparent — no hidden fees.",
  },
  {
    number: "3",
    icon: Truck,
    title: "We Handle Everything",
    description:
      "Our team arrives on time, loads everything up, and leaves the area clean. We sort, donate, recycle, and dispose responsibly.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-green mb-3">
            How It Works
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-heading text-brand-black">
            Three Simple Steps
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Getting rid of your junk has never been easier. Here is how we make
            it happen.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-gray-200" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step circle */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-brand-green flex items-center justify-center mb-6 shadow-lg shadow-brand-green/20">
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                {/* Number badge */}
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-brand-dark text-white text-xs font-bold flex items-center justify-center z-20">
                  {step.number}
                </span>

                <h3 className="font-heading text-xl font-bold text-brand-black mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
