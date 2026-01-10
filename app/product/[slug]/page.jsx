import React from 'react'

import WpcLouvers from '../../components/ProductsPage/WpcLouvers'
import Wallpaper from '../../components/ProductsPage/Wallpaper.jsx'
import PvcPanels from '../../components/ProductsPage/PvcPanels.jsx'
import CharcoalLouvers from '../../components/ProductsPage/CharcoalLouvers.jsx'
import EcoFlutedPanels from '../../components/ProductsPage/EcoFlutedPanels.jsx'
import UvSheets from '../../components/ProductsPage/UvSheets.jsx'

export default async function Productpage({params}) {

const { slug } = await params;
  
if(slug === "wallpaper") return <Wallpaper />;
if(slug === "wpc-louvers") return <WpcLouvers />;
if(slug === "pvc-panels") return <PvcPanels />;
if(slug === "charcoal-louvers") return <CharcoalLouvers />;
if(slug === "eco-fluted") return <EcoFlutedPanels />;
if(slug === "uv-sheets") return <UvSheets />;

  return <div>Product Not Found</div>
  
}
