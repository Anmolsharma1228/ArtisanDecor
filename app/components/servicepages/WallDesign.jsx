"use client"
import React from "react";
import SwiperSlides from "../../components/SwiperSlides";
import { walldesignslides as slides } from "../serviceimages/Swiperimages"
import Cards from "../../components/Cards"
import { walldesigncarddata } from "../serviceimages/ServiceCardData";
import { Check } from "lucide-react";


const WallDesign = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <div className="py-10 mt-16 flex flex-col md:flex-row gap-10 items-center max-w-6xl mx-auto px-4">
        {/* TEXT */}
        <div className="w-full md:max-w-2xl">
          <h1 className="text-lg sm:text-xl font-semibold mb-2">
            Transform Your Walls into Stunning Visual Stories
          </h1>
          <p>
            Wall design is an essential element that defines the character,
            elegance, and mood of any interior space. Our premium wall design
            solutions are thoughtfully crafted to transform ordinary walls into
            refined architectural statements. We combine sophisticated
            aesthetics with high-quality materials to deliver timeless and
            luxurious finishes. Every design is customized to complement the
            overall interior theme and reflect your personal style. From subtle
            textures to bold statement walls, our designs add depth, warmth, and
            visual harmony. We specialize in premium panels, designer finishes,
            and modern textures that elevate both residential and commercial
            spaces. Attention to detail and flawless execution are at the core
            of our craftsmanship. Each project is handled with precision to
            ensure durability, elegance, and lasting appeal. Our wall designs
            seamlessly blend functionality with artistic expression. The result
            is an atmosphere that feels exclusive, polished, and truly
            distinctive.
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

         <Cards card={walldesigncarddata} />
      </div>

      <div className="mt-20 md:mt-32 max-w-5xl mx-auto px-2">
        <div className="bg-[#F8F5F0] rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/*  First Card */}
            <div>
              <h1 className="text-xl font-semibold mb-6 text-center md:text-left">
                Wall Designs Work Best
              </h1>

              <ul className="list-disc space-y-3 text-gray-700">
                <li>Living Rooms</li>
                <li>Bedrooms</li>
                <li>TV Units & Accent Walls</li>
                <li>Offices & Corporate Spaces</li>
                <li>Hotels & Restaurants</li>
                <li>Retail Shops & Showrooms</li>
              </ul>
            </div>

            {/* Second Card */}
            <div>
              <h1 className="text-xl font-semibold mb-6 text-center md:text-left">
                Why Choose Us?
              </h1>

              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  High-quality materials
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Modern & trending designs
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Skilled professionals
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  On-time project delivery
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Affordable pricing
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Customer-centric approach
                </li>
              </ul>
            </div>

            {/* Third Card */}
            <div>
              <h1 className="text-xl font-semibold mb-6 text-center md:text-left">
                Our Process
              </h1>

              <ul className="space-y-3 text-gray-700 list-decimal">
                <li>
                  Consultation – Understand your needs and design preferences
                </li>
                <li>
                  Design Planning – Select materials, colors, and patterns
                </li>
                <li>
                  Execution – Professional installation with attention to detail
                </li>
                <li>Final Touch – Quality check and finishing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WallDesign;
