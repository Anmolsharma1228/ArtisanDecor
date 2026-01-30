import PhilosophyCraft from "./components/PhilosophyCraft";
import HomeSwiper from "./components/HomeSwiper";
import ServiceCard from "./components/ServiceCard";
import Collection from "./components/Collection";
import AboutPage from "./about/page";
export default function HomeSlider() {
  return (
    <div>
      <HomeSwiper />
      <Collection/>
      <AboutPage/>
      {/* <PhilosophyCraft /> */}
      <ServiceCard />
    </div>
  );
}
