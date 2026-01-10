import React from "react";
import ProductCard from "../productimages/ProductCrad";
import { pvcpanels } from "../productimages/Productimages";

const PvcPanels = () => {
  return (
   <section className="bg-[#FAF9F7] py-20">
         {/* HERO / INTRO */}
         <div className="max-w-5xl ml-4 sm:ml-10 px-6 mt-6">
           <h1 className="text-2xl md:text-3xl font-bold leading-tight">
             Walls That Define Style, Structure,
             <span className="block text-orange-700">and Sophistication</span>
           </h1>
   
           <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl">
            Artisan Decor PVC Wall Panels are crafted to enhance interiors with modern designs, refined textures, and durable finishes. Made from high-quality materials, our panels offer a perfect blend of elegance and strength, making them ideal for both residential and commercial spaces.
           </p>
         </div>
   
         {/* FEATURES / PRODUCTS */}
         <div className="mt-24 max-w-7xl mx-auto px-6">
           <h2 className="text-center text-3xl font-bold text-orange-700">
             Key Features
           </h2>
   
           <div className="mt-12">
             {/* ProductCard already contains grid */}
             <ProductCard card={pvcpanels} />
           </div>
         </div>
       </section>
  );
};

export default PvcPanels;
