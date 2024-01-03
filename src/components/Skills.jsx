import React from "react";

import { skillsDataWeb, skillsDataDesign, skillsDataCMS } from "../assets/lib/data";
import { useLanguage } from "../context/lang-context";
const Skills = () => {
  const { language } = useLanguage();
  return (
    <>
      <section className="bg-primary px-5 dark:bg-gray-500 text-white pt-20 md:pt-22" id="skills">
      <div className="container mx-auto ">
      <h3 className="font-bold  dark:text-white text-3xl text-transparent bg-clip-text  bg-gradient-to-r from-teal-500 to-cyan-50">
                        {language === "en" ? "Skills" : "Vaardigheden"}
             </h3>     </div> 
        <div className="container mx-auto grid   md:grid-rows-2 grid-cols-12 md:grid-flow-col gap-4" >
       
          <div className="m-5 col-span-12 md:row-span-3 md:col-span-5">
            <article
              className=" bg-icewhite dark:bg-gray-400 dark-shadow  h-auto rounded-2xl p-5 relative z-10 "
            >

              <p className=" flex justify-center dark:text-white  p-4 text-4xl text-transparent bg-clip-text  text-3xl p-2 bg-gradient-to-r from-teal-500 to-cyan-50">

                {skillsDataWeb[0].skillsTitle}

              </p>
              <div className="grid grid-cols-4 gap-4">
                {skillsDataWeb[0].skills.map((skill, index) => (



                  <div
                    key={index}
                    className={`skill-item  cursor-pointer  rounded-2xl p-2 border-2 flex justify-center items-center text-center max-lg:items-center`}
                    data-te-toggle="tooltip"
                    title={skill.title}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.animation = "pulse 2s infinite";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.animation = "";
                      e.currentTarget.style.transform = "";
                    }}
                    style={{ borderColor: skill.color }}
                  >
                    <img src={skill.icon} alt={`${skill.title}-icon`} className="h-[10rem] w-7/12" />
                    <h3 className="max-lg:text-[2rem] min-[320px]:hidden">{skill.title}</h3>
                  </div>

                ))}
              </div>

            </article>


          </div>

          {/* next section */}
          <div className="m-5  col-span-12 md:col-span-7">
            <article
              className="  bg-icewhite dark:bg-gray-400 dark-shadow  h-auto rounded-2xl p-5 relative z-10"
            >

              <p className=" flex dark:text-white justify-center p-4 text-4xl text-transparent bg-clip-text  text-3xl p-2 bg-gradient-to-r from-teal-500 to-cyan-50">

                {skillsDataDesign[0].skillsTitle}

              </p>
              <div className="grid grid-cols-4 gap-4">
                {skillsDataDesign[0].skills.map((skill, index) => (



                  <div
                    key={index}
                    className={`skill-item  cursor-pointer  rounded-2xl p-2 border-2 flex justify-center items-center text-center max-lg:items-center`}
                    data-te-toggle="tooltip"
                    title={skill.title}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.animation = "pulse 2s infinite";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.animation = "";
                      e.currentTarget.style.transform = "";
                    }}
                    style={{ borderColor: skill.color }}
                  >
                    <img src={skill.icon} alt={`${skill.title}-icon`} className="h-[10rem] w-7/12" />
                    <h3 className="max-lg:text-[2rem] min-[320px]:hidden">{skill.title}</h3>
                  </div>

                ))}
              </div>

            </article>


          </div>

          <div className="m-5 col-span-12 md:row-span-2 md:col-span-7">
            <article
              className=" bg-icewhite dark:bg-gray-400 dark-shadow  h-auto rounded-2xl p-5 relative z-10"
            >

              <p className=" flex justify-center dark:text-white p-4 text-4xl text-transparent bg-clip-text  text-3xl p-2 bg-gradient-to-r from-teal-500 to-cyan-50">

                {skillsDataCMS[0].skillsTitle}

              </p>
              <div className="grid grid-cols-3 gap-4">
                {skillsDataCMS[0].skills.map((skill, index) => (



                  <div
                    key={index}
                    className={`skill-item  cursor-pointer  rounded-2xl p-2 border-2 flex justify-center items-center text-center max-lg:items-center`}
                    data-te-toggle="tooltip"
                    title={skill.title}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.animation = "pulse 2s infinite";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.animation = "";
                      e.currentTarget.style.transform = "";
                    }}
                    style={{ borderColor: skill.color }}
                  >
                    <img src={skill.icon} alt={`${skill.title}-icon`} className="h-[10rem] w-7/12" />
                    <h3 className="max-lg:text-[2rem] min-[320px]:hidden">{skill.title}</h3>
                  </div>

                ))}
              </div>

            </article>


          </div>
        </div>
      </section>

    </>

  );
};
export default Skills;