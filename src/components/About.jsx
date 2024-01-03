import React from "react";
 import aboutImage from "./../assets/img/about.jpeg";
import { aboutMeData } from "../assets/lib/data";
import { useLanguage } from "../context/lang-context";
const About = () => {

  const { language } = useLanguage();
    return (

      <section className="bg-secondery text-white px-5 dark:bg-gray-500  pt-20 md:pt-22" id="about-me">
        <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
          <div className="about-info">
          <h3 className="font-bold  dark:text-white text-3xl text-transparent bg-clip-text  bg-gradient-to-r from-teal-500 to-cyan-50">
                        {language === "en" ? aboutMeData.title_EN : aboutMeData.title}
             </h3>

        
             <p  className="py-5 text-left text-gray-500 dark:text-white px-2">
      {language === "en" ? aboutMeData.paragraphs[0].title_EN : aboutMeData.paragraphs[0].title}
    </p>        
          {aboutMeData.paragraphs.map((paragraph, index) => (
           
    <p key={index} className=" text-left text-gray-500 px-2 py-1 dark:text-white">
      {language === "en" ? paragraph.description_EN : paragraph.description}
    </p>
  ))}
          </div> 
          <div className="about-img">
            <img
              src={aboutImage}
              alt="coding illustration"
              className="lgw-[80%] md:ml-auto"
            />
          </div>
        </div>
      </section>
    );
  };
  export default About;