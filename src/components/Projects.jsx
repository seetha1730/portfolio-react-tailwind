import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./button/Button";
import { useLanguage } from "../context/lang-context";
import {projectsData} from "../assets/lib/data";

  const Project = () => {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };  
   const { language } = useLanguage();

    return (
      <section className="bg-primary text-white px-5 py-32" id="projects">
        <div className="projects  container mx-auto p-5 ">
        <h2 className="font-bold mb-5  text-4xl text-transparent bg-clip-text  bg-gradient-to-r from-teal-500 to-cyan-50"> My projects</h2>

 <div className="bg-gray-100 rounded-xl">

        <Slider {...sliderSettings}>
        {projectsData.map((project, i) => {
    return (
        <div className="relative  p-10" key={i}>
            <div className="grid grid-cols-12 gap-3">
            <div className="col-span-6 flex items-center">
            <img className="col-span-5 " src={project.image} alt={project.title} />

            </div>
            <div className="col-span-6 px-5  ">
                <p className="py-5 text-left text-gray-500 font-bold px-2 text-white">
                    {project.description}
                </p>
                <div className="technologies">
                <h3 className="font-bold   text-2xl text-transparent bg-clip-text  bg-gradient-to-r from-teal-500 to-cyan-50">
                        {language === "nl" ? "Technologieën" : "Technologies"}
                      </h3>
                      <div className="grid grid-cols-6 gap-2 p-4">
                        {project.technologies.map(
                          (technology, i) => (
                            <img
                              key={i}
                              src={technology.icon}
                              alt={`${project.title}-icon`}
                              className="h-[5rem] w-[50%] "
                              data-te-toggle="tooltip"
                              title={technology.name}
                            />
                          )
                        )}
                      </div>

                 </div>
                <div className="button-container  flex items-end justify-center mr-8 gap-10  ">

                    {project.buttons && project.buttons.map((button, index) => (
                        <Button
                            key={index}
                            label={language === "nl" ? button.label.nl : button.label.en}
                            iconSVG={button.icon}
                            link={`${button.link}`}
                            buttoncolor={button.color}
                        />
                    ))}
                </div>
            </div>
            </div>
        </div>
    );
})}
          </Slider>
        </div>
        </div>
      </section>
    );
  }
  export default Project;
