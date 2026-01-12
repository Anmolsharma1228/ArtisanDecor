import PhilosophyCraft from "./components/PhilosophyCraft";
import HomeSwiper from "./components/HomeSwiper";
import ServiceCard from "./components/ServiceCard";
import AboutPage from "./about/page";
export default function HomeSlider() {
  return (
    <div>
      <HomeSwiper />
      <AboutPage/>
      {/* <PhilosophyCraft /> */}
      <ServiceCard />
    </div>
  );
}
