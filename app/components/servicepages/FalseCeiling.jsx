"use client";
import React from "react";
import SwiperSlides from "../../components/SwiperSlides";
import { falseceilingslides as slides } from "../serviceimages/Swiperimages"
import Cards from "../../components/Cards";
import { falseceilingcarddata as card } from "../serviceimages/ServiceCardData";
import { PenTool, TreePine, Lightbulb, LayoutGrid, Check } from "lucide-react";

const FalseCeiling = () => {
  return (
    <div>
      <div className="py-10 mt-16 flex flex-col md:flex-row gap-10 items-center max-w-6xl mx-auto px-4">
        <div className="w-full md:max-w-2xl">
          <h1 className="text-lg sm:text-xl font-semibold mb-2">
            Elevate Your Interiors with Elegant False Ceilings
          </h1>
          <p>
            Enhance your interiors with thoughtfully designed false ceilings by
            AH Decor. Our false ceiling solutions add elegance while improving
            lighting, acoustics, and comfort. We offer gypsum, POP, wooden, and
            modular ceiling designs for homes and offices. Each ceiling is
            crafted to conceal wiring and create a clean, refined finish. Our
            designs support cove lighting, spotlights, and modern LED
            integrations. False ceilings help regulate temperature and reduce
            noise for a comfortable space. We customize every design to suit
            your layout, style, and requirements. Our skilled craftsmen ensure
            precise installation and premium finishing. We use high-quality
            materials for durability and long-lasting performance. Perfect for
            living rooms, bedrooms, offices, and commercial interiors. With AH
            Decor, your ceiling becomes a statement of elegance and quality.
          </p>
        </div>
        {/* SWIPER */}
        <SwiperSlides slides={slides} />
      </div>

      {/* WHAT WE OFFER */}
      <div className="mt-16 md:mt-36 px-4">
        <h1 className="text-center text-2xl sm:text-3xl font-bold mb-10">
          What We Offer
        </h1>

       <Cards card={card} />
      </div>
      <div className="mt-20 md:mt-32 max-w-5xl mx-auto px-2">
        <div className="bg-[#F8F5F0] rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/*  First Card */}
            <div>
              <h1 className="text-xl font-semibold mb-6 text-center md:text-left">
                False Ceilings Work Best In
              </h1>

              <ul className="list-disc space-y-3 text-gray-700">
                <li>Living Rooms & Drawing Areas</li>
                <li>Bedrooms & Master Suites</li>
                <li>TV Units & Feature Ceilings</li>
                <li>Offices & Corporate Spaces</li>
                <li>Hotels, Cafés & Restaurants</li>
                <li>Retail Stores & Showrooms</li>
              </ul>
            </div>

            {/* Second Card */}
            <div>
              <h1 className="text-xl font-semibold mb-6 text-center md:text-left">
                Why Choose Our False Ceilings?
              </h1>

              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Premium gypsum, POP & wooden materials
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Custom designs with modern lighting integration
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Skilled craftsmanship & precise finishing
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Clean, safe & on-time project execution
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Cost-effective solutions without quality compromise
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Customer-focused design approach
                </li>
              </ul>
            </div>

            {/* Third Card */}
            <div>
              <h1 className="text-xl font-semibold mb-6 text-center md:text-left">
                Our False Ceiling Process
              </h1>

              <ul className="space-y-3 text-gray-700 list-decimal">
                <li>
                  Site Consultation – Understanding space, height & lighting
                  needs
                </li>
                <li>
                  Design & Planning – Material selection, layout & lighting
                  design
                </li>
                <li>
                  Installation – Professional execution with structural
                  precision
                </li>
                <li>
                  Finishing & Inspection – Final polish, lighting test & quality
                  check
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FalseCeiling;
