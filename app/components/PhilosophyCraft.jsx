import { Sparkles, Sofa } from "lucide-react";

export default function PhilosophyCraft() {
  return (
    <div className="max-w-6xl mx-auto mt-6 md:mt-14 grid md:grid-cols-2 gap-16 bg-[#F8F5F0] px-6 md:px-10 py-16 rounded-2xl shadow-[0_40px_80px_-30px_rgba(0,0,0,0.15)]">

      {/* Interior Philosophy */}
      <div className="group relative space-y-6 md:p-6 rounded-xl transition-all duration-500 ease-out
        hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.18)]">

        {/* Icon */}
        <div className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-300
          transition-all duration-500 group-hover:bg-[#bb9542]">
          <Sparkles className="w-5 h-5 text-neutral-600 transition-all duration-500
            group-hover:text-white group-hover:rotate-6" />
        </div>

        <p className="uppercase tracking-[0.25em] text-sm text-neutral-500">
          Interior Philosophy
        </p>

        <h2 className="text-2xl font-light tracking-wide text-neutral-900">
          Spaces Designed Around You
        </h2>

        <p className="text-neutral-600 leading-relaxed">
          Our interiors are guided by individuality rather than trends.
          We create harmony between space, light, and material to achieve a sense of quiet elegance.
        </p>

        <p className="text-neutral-600 leading-relaxed">
          Natural finishes, soft tones, and precise detailing shape interiors that feel warm,
          balanced, and timeless.
        </p>
      </div>

      {/* Furniture Craftsmanship */}
      <div className="group relative space-y-6 md:p-6 rounded-xl transition-all duration-500 ease-out
        hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.18)]">

        {/* Icon */}
        <div className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-300
          transition-all duration-500 group-hover:bg-[#bb9542]">
          <Sofa className="w-5 h-5 text-neutral-600 transition-all duration-500
            group-hover:text-white group-hover:-rotate-6" />
        </div>

        <p className="uppercase tracking-[0.25em] text-sm text-neutral-500">
          Furniture Craftsmanship
        </p>

        <h2 className="text-2xl font-light tracking-wide text-neutral-900">
          Crafted Pieces. Enduring Presence.
        </h2>

        <p className="text-neutral-600 leading-relaxed">
          Each furniture piece is handcrafted using premium materials and meticulous techniques.
          Designed with restraint and purpose, our furniture blends seamlessly into its surroundings.
        </p>

        <p className="text-neutral-600 leading-relaxed">
          From bespoke wardrobes to signature statement pieces, every form reflects balance,
          precision, and longevity.
        </p>
      </div>

    </div>
  );
}
