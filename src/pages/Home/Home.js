import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import Exceptional from "./Exceptional";
import Footer from "./Footer";
import InfosCard from "./InfosCard";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className="px-12">
      <Banner />
      <InfosCard />
      <Services />
      <Exceptional />
      <MakeAppointment />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
