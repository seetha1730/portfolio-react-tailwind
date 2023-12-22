import React from "react";
 import myimage from "./../assets/IMG.jpg";

const About = () => {
    return (
      <section className="bg-secondery text-white px-5 py-32" id="about-me">
        <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
          <div className="about-info">
            <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
              About Me
            </h2>
            <p className="pb-5">
              Hi, My Name Is Seetha Lakshmi everyone calls me Amrin. I am a
              Frontend Developer. I build beautifull websites with React and
              Tailwind CSS.
            </p>
            <p className="pb-5">
              I am proficient in Frontend skills like React.js, Redux, Redux Tool
              Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.
            </p>
            <p>In backend I know Node.js, Express.js, MongoDB, and Mongoose</p>
            <p>
              In my spare time I create YouTube videos and write blogs on my Blog.
              Where I talk about programming theory and build various projects.
            </p>
          </div>
          <div className="about-img">
            <img
              src={myimage}
              alt="coding illustration"
              className="lgw-[80%] md:ml-auto"
            />
          </div>
        </div>
      </section>
    );
  };
  export default About;