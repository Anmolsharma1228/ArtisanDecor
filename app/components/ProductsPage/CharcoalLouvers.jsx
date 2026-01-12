import React from 'react'
import ProductCard from '../productimages/ProductCrad'
import { charcoalLouvers } from '../productimages/Productimages'


const CharcoalLouvers = () => {
  return (
      <section className="bg-[#FAF9F7] py-20">
           {/* HERO / INTRO */}
           <div className="max-w-5xl ml-4 md:ml-10 px-6 mt-6">
             <h1 className="text-2xl md:text-3xl font-bold leading-tight">
               Walls That Command Depth, Texture,
               <span className="block text-orange-700">and Modern Elegance</span>
             </h1>
     
             <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl">
              Artisan Decor Charcoal Louvers are designed to transform interiors with bold linear forms, rich matte textures, and striking visual depth. Crafted using premium materials, our louvers deliver a perfect balance of contemporary style and lasting durability for both residential and commercial spaces.
             </p>
           </div>
     
           {/* FEATURES / PRODUCTS */}
           <div className="mt-24 max-w-7xl mx-auto px-6">
             <h2 className="text-center text-3xl font-bold text-orange-700">
               Key Features
             </h2>
     
             <div className="mt-12">
               {/* ProductCard already contains grid */}
               <ProductCard card={charcoalLouvers} />
             </div>
           </div>
         </section>
  )
}

export default CharcoalLouvers