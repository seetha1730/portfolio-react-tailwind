import React, { useState } from "react";
import { sendGeneralMail } from '../services/mailjet.service';
import { useLanguage } from "../context/lang-context";
import { contactData } from "../assets/lib/data";

const Contact = () => {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message, subject } = formData;

    try {
      await sendGeneralMail(email, subject, `Name: ${name}\n\nMessage: ${message}`);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  const { title, description, inputfields, textarea, button } = contactData;
  return (
    <section id="contact" className="relative bg-primary dark:bg-gray-500 text-white px-5 pt-20 md:pt-22 dark:bg-gray-500 ">
     <div className="container mx-auto ">
     <h2 className="container font-bold mb-5 w-full text-4xl text-transparent bg-clip-text  bg-gradient-to-r from-teal-500 to-cyan-50 dark:text-white "> {language === "en" ? title.en : title.nl} </h2>
     </div> 

      <div className=" container p-5 mx-auto w-full md:flex sm:flex-nowrap">

        <div className=" w-full lg:w-2/4 bg-gray-900 rounded-lg overflow-hidden lg:mr-5 p-10 flex items-end justify-start relative">



          <iframe width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2455.065695244886!2d5.037801875913079!3d52.02390087284161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c664c112cddfab%3A0x75d1b69082973051!2sSimon%20Stevinlaan%2018%2C%203401%20AA%20IJsselstein!5e0!3m2!1snl!2snl!4v1704118706946!5m2!1snl!2snl" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


          <div className="bg-[#1abaa9] dark:bg-gray-600 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font dark:text-white dark:underline font-semibold text-gray-500 tracking-widest text-sm">
                ADDRESS
              </h2>
              <p className="mt-1 text-white">
                Simon stevinlaan, Ijsselstein <br />
                Netherlands
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="dark:underline text-sm dark:text-white title-font font-semibold text-gray-500 tracking-widest text-sm">
                EMAIL
              </h2>
              <a href="mailto:seetharaj1990@gmail.com" className="text-gray-600  dark:text-gray-400 dark:underline-none underline leading-relaxed">
                seetharaj1990@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <a href="+31685046594" className="leading-relaxed text-white">+31685046594</a>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}

          className=" lg:w-2/4 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="dark:text-white flex justify-center p-4 text-4xl text-transparent bg-clip-text  text-3xl p-2 bg-gradient-to-r from-teal-500 to-cyan-50">
            {language === "en" ? "Hire Me" : "huur me in"}
          </h2>
          <p className="leading-relaxed text-[#13B8AA] dark:text-white mb-5">
            {language === "en" ? description.en : description.nl}
          </p>
          {inputfields.map((field, index) => (
            <div key={index} className="relative mb-4">
              <label htmlFor={field.name} className="dark:text-white leading-7 text-sm text-[#13B8AA]">
                {language === "en" ? field.name_EN : field.name}
              </label>
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                onChange={(e) => handleChange(e)}
                placeholder={language === "en" ? field.placeholder.en : field.placeholder.nl}
                className="w-full dark:border-white border-[#13B8AA] rounded border text-gray-600 py-1 px-3 leading-8 outline-none transition-colors duration-200 ease-in-out"
              />

            </div>

          ))}
          <label htmlFor={textarea.name} className="dark:text-white leading-7 text-sm text-[#13B8AA]">
            {language === "en" ? textarea.name_EN : textarea.name}
          </label>
          <textarea
            id="message"
            name="message"
            onChange={(e) => handleChange(e)}
            placeholder={language === "en" ? textarea.placeholder.en : textarea.placeholder.nl}
            className="w-full dark:border-white border-[#13B8AA] mb-3 rounded border outline-none text-gray-600 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          />


          <button
            type="submit"
            className="text-white dark:bg-gray-800 bg-[#13B8AA] border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;