import AboutUs from "@components/Landing/AboutUs";
import Landings from "@components/Landing/Landings";
import OurServices from "@components/Landing/OurServices";
import Social from "@components/Landing/Social";
import Portfolio from "@components/Landing/Portfolio";
import Testimonial from "@components/Landing/Testimonial";
import Tools from "@components/Landing/Tools";
import WhyChooseUs from "@components/Landing/WhyChooseUs";
import type { NextPage } from "next";
import Head from "next/head";
import WHY_CHOOSE_US from "@contents/LandingPage/WhyChooseUs";
import BookAppointment from "@components/Landing/Appointment/BookAppointment";
import DevelopmentProcess from "@components/Landing/DevelopmentProcess";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | Virtual Trading Solution</title>
        <meta name="description" content="VTS Blockchain Engineers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landings />
      <AboutUs />
      <OurServices />
      <Tools />
      <Portfolio />
      <Testimonial />
      <DevelopmentProcess />
      <WhyChooseUs data={WHY_CHOOSE_US.solution} />
      <BookAppointment />
      <Social />
    </div>
  );
};

export default Home;
