import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Card from "../Sections/Card";
import Testimonial from "../Sections/Testimonial";
import WhyChooseUs from "../Sections/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Navbar />
      
      <main>
        <Hero />
        <Card />
        <Testimonial />
        <WhyChooseUs />
      </main>
    </>
  );
};

export default Home;