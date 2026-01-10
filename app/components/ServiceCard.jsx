import React from "react";
import { servicecard } from "../components/serviceimages/ServiceCardData";
import { Route } from "lucide-react";

export default function ServiceCard() {
  return (
    <div className="mt-6 md:mt-10 max-w-6xl mx-auto">
      <div className="flex justify-center items-center gap-3.5 mb-4">
        <Route size={28} className="text-[#FF6F61]" />
        <h1 className="text-center text-2xl font-semibold">Our Process</h1>
      </div>
      <div className="bg-[#F8F5F0] grid md:grid-cols-2 md:gap-14 gap-6">
        {servicecard.map((data) => {
          return (
            <div
              key={data.id}
              className="group relative space-y-2 md:space-y-6 p-8 rounded-xl transition-all duration-500 ease-out
        hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.18)]"
            >
              <h1 className="text-2xl font-light tracking-wide text-neutral-900">
                {data.heading}
              </h1>
              <p className="text-neutral-600 leading-relaxed">{data.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
