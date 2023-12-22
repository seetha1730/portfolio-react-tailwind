import React from "react";
 import Myimage from "../../assets/IMG.jpg";
import "../Home/home.css"
import { useLanguage } from "../../context/lang-context";
import { headerIntroData } from "../../assets/lib/data";
import Button from "../button/Button";

  const Home = () => {
    const { language } = useLanguage();

    return (
      <section className="bg-primary px-5 text-white py-32" id="home">
        <div className="container mx-auto grid md:grid-cols-1 items-center justify-center md:justify-between">
          <div className=" pb-5 md:pb-0">
          <div className="my-img w-3/12 mx-auto">
            <img
              src={Myimage}
              alt="coding illustration"
              className="rounded-full"
            />
          </div>
          <div className="flex w-7/12 text-center justify-center mx-auto text-gray-900 grid grid-cols-1">
          <h1 className="font-mono text-transparent bg-clip-text text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        {language === "nl"
          ? headerIntroData.title.nl
          : headerIntroData.title.en}
        <span className="wave text-7xl">&#128075;&#127997;</span>
      </h1>
      <h2 className="text-transparent bg-clip-text  text-3xl p-2 bg-gradient-to-r from-teal-500 to-cyan-500"> {language === "nl" ? headerIntroData.subtitle.nl:headerIntroData.subtitle.en}</h2>
      <p className="my-3">
        {language === "nl"
          ? headerIntroData.description.nl
          : headerIntroData.description.en}
      </p>
           
          
            <div className="button-container my-5 flex items-center justify-center mr-8 gap-10 mb-12 max-lg:flex-col max-lg:items-center">
        {headerIntroData.buttons.map((button, index) => (
          <Button
            key={index}
            label={language === "nl" ? button.label.nl : button.label.en}
            iconSVG={button.icon}
            link={`${button.name.toLocaleLowerCase()}`}
            buttoncolor={button.color}
           
          />
        ))}
      </div>
          </div>
       
        </div>
        </div>
      </section>
    );
  };
  export default Home;