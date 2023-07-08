import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";

// 1. import `NextUIProvider` component
import { createTheme, NextUIProvider } from '@nextui-org/react';
import NextModal from "./components/NextModal";
import NextNav from "./components/NextNavBar/NextNav";
import Experience from "./components/resume/Experience";

function App() {

  const darkTheme = createTheme({
    type: 'dark'
  });

  return (
    <NextUIProvider theme={darkTheme}>


      <div className="w-full allBg  h-auto bg-bodyColor text-lightText px-4">
        {/* <Navbar /> */}
        <NextNav />

        <div className="max-w-screen-xl mx-auto">
          <Banner />
          <Experience/>
          
          {/* <Resume /> */}
          
          <Features />
          <Skills/>
          {/* <Testimonial /> */}
          <Projects />
          {/* <Contact /> */}
          {/* <Footer /> */}
          <FooterBottom />
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App;
