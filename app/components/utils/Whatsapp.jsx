import React from 'react'
import { products } from '../Data/ProductPrice'

export default function generateproductListMessage() {

let msg = "Hello please select your product:\n\n";

products.forEach((p)=>{
  msg += `${p.name}\n`;
  msg +=  `View Price: https://wa.me/919667384928?text=${encodeURIComponent(
      `Hi, I want price details of ${p.name}`
    )}\n\n`;
});


  return encodeURIComponent(msg);
}
