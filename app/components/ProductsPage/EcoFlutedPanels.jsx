import React from 'react'
import ProductCard from '../productimages/ProductCrad'
import {flutedpanel} from '../productimages/Productimages'



const EcoFlutedPanels = () => {
  return (
    <section className="bg-[#FAF9F7] py-20">
         {/* HERO / INTRO */}
         <div className="max-w-5xl ml-4 md:ml-10 px-6 mt-6">
           <h1 className="text-2xl md:text-3xl font-bold leading-tight">
           Walls That Define Rhythm,
             <span className="block text-orange-700">Depth & Elegance</span>
           </h1>
   
           <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl">
           Artisan Decor Fluted Panels are crafted to enhance interior spaces with refined linear textures, architectural depth, and timeless sophistication. Made from premium-grade materials, our fluted panels deliver the perfect balance of aesthetics and durability, making them ideal for luxury residential and high-end commercial interiors.
           </p>
         </div>
   
         {/* FEATURES / PRODUCTS */}
         <div className="mt-24 max-w-7xl mx-auto px-6">
           <h2 className="text-center text-3xl font-bold text-orange-700">
             Key Features
           </h2>
   
           <div className="mt-12">
             {/* ProductCard already contains grid */}
             <ProductCard card={flutedpanel} />
           </div>
         </div>
       </section>
  )
}

export default EcoFlutedPanels