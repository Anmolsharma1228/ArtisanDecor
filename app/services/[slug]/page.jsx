import WallDesign from "@/app/components/servicepages/WallDesign";
import FalseCeiling from "@/app/components/servicepages/FalseCeiling";
import OfficeInterior from "@/app/components/servicepages/OfficeInterior";
import HomeInterior from "@/app/components/servicepages/HomeInterior";
import FurnitureWork from "@/app/components/servicepages/FurnitureWork";

export default async function ServicePage({ params }) {
  const { slug } = await params;

  if (slug === "wall-design") return <WallDesign />;
  if (slug === "false-ceiling") return <FalseCeiling />;
  if (slug === "office-interior") return <OfficeInterior />;
  if (slug === "home-interior") return <HomeInterior />;
  if (slug === "furniture-work") return <FurnitureWork />;
  return <h1>Service not found</h1>;
}
