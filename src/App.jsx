import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import FeaturedProject from "./components/FeaturedProject.jsx";
import VideoPortfolio from "./components/VideoPortfolio.jsx";
import ThumbnailPortfolio from "./components/ThumbnailPortfolio.jsx";
import Services from "./components/Services.jsx";
import Process from "./components/Process.jsx";
import Tools from "./components/Tools.jsx";
import About from "./components/About.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="bg-bg text-white font-body min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProject />
        <VideoPortfolio />
        <ThumbnailPortfolio />
        <Services />
        <Process />
        <Tools />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
