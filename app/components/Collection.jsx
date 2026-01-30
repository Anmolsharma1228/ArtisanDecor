"use client"
import ProductCard from "./productimages/ProductCrad"
import { collection } from "./productimages/Productimages"

export default function Collection() {
  return (
     <section className="bg-[#FAF9F7] py-10">
          {/* FEATURES / PRODUCTS */}
          <div className="mt-14 max-w-7xl mx-auto px-6">
            <h2 className="text-center text-3xl font-bold">
              Our Collections
            </h2>
    
            <div className="mt-12">
              {/* ProductCard already contains grid */}
              <ProductCard card={collection} />
            </div>
          </div>
        </section>
  )
}
