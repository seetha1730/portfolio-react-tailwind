import adobexdicon from "../../assets/icons/adobexdicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import trelloicon from "../../assets/icons/trelloicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import netlifyicon from "../../assets/icons/netlifyicon.svg";
import jwticon from "../../assets/icons/jwticon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import socketicon from "../../assets/icons/socket-io.svg"
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import bootstrapicon from "../../assets/icons/bootstrapicon.svg"
import jqueryicon from "../../assets/icons/jqueryicon.svg"
import handlebaricon from "../../assets/icons/handlebaricon.svg"
import photoshopicon from "../../assets/icons/photoshop.svg"
import woocommerceicon from "../../assets/icons/woocommerceicon.svg"
import adobecq5icon from "../../assets/icons/adobeCq5icon.svg"
import posImage from "../../assets/img/pos.png"
import chickEggimage from "../../assets/img/chick-egg.png"
import quizImage from "../../assets/img/Interactive-quiz.png"
import portfolioImage from "../../assets/img/Interactive-quiz.png"

export const headerIntroData = {
  title: {
    nl: "Hi, Ik ben Seetha Lakshmi",
    en: "Hi, I'm Seetha Lakshmi",
  },
  subtitle: {
    nl: "Fullstack webontwikkelaar gevestigd in Nederland",
    en: "Fullstack web Developer based in Utrecht, Netherlands",
  },
  description: {
    nl: "Ik ben Seetha, een fullstack ontwikkelaar met als doel mijn carrière te bevorderen en deel te nemen aan inspirerende projecten. Hier presenteer ik mijn werk en mijn passie voor webontwikkeling. Laten we samen digitale oplossingen vormgeven en de toekomst vormgeven! Ik ben bedreven in React.js, Tailwind CSS, WebSocket, Node.js, Mongoose, MongoDB, Express.js, Handlebars.js, Bootstrap, jQuery, HTML, CSS, JavaScript en WordPress.",
    en: "I'm Seetha, a fullstack developer with the goal of advancing my career and participating in inspiring projects. Here I present my work and my passion for web development. Let's shape digital solutions together and shape the future! I am proficient in React.js, Tailwind CSS, WebSocket, Node.js, Mongoose, MongoDB, Express.js, Handlebars.js, Bootstrap, jQuery, HTML, CSS, JavaScript, and WordPress.",
  },
  buttons: [
    {
      name: "Contact",
      label: {
      
      },
      icon: FiMail,
      color: "bg-gradient-to-r from-teal-500 to-cyan-500 dark:bg-white dark:text-gray-500",
      link: "mailto:seetharaj1990@gmail.com",
    },
    {
      name: "Github",
      label: {
    
      },
      icon: FiGithub,
      color: "bg-gray-900 text-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0",
      link: "https://github.com/seetha1730",
    },
    {
      name: "Linkedin",
      label: {
      
        
      },
      link: "https://www.linkedin.com/in/seetha-lakshmi-19a00b53/",

      icon: FiLinkedin,
      color: "bg-gray-900 text-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0",
    },

  ],
  
};

export const projectsData = [
  {
    title_EN: "Interactive Live Quiz Board",
    title:"Interactief Live Quiz-bordspel",
    description:
      "Betrokken bij de ontwikkeling van een interactieve live quiz met behulp van Tailwind CSS, React en Socket.io. Bijgedragen aan het creëren van live quizruimtes, waardoor realtime deelname en concurrentie tussen gebruikers mogelijk wordt gemaakt.",
    description_EN:
      "Engaged in the development of an interactive live quiz using Tailwind CSS, React, and Socket.io. Contributed to creating live quiz rooms, enabling real-time participation and competition among users.",
    technologies: [
      { name: "React", icon: reacticon },
      { name:"Web socket",icon:socketicon},
      { name:"Tailwind Css",icon:tailwindcssicon},
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name:"Express",icon:expressicon},
      { name:"NodeJs",icon:nodejsicon},
      { name: "Netlify", icon: netlifyicon },
      { name: "Trello", icon: trelloicon },
    ],
    image: quizImage,
    
    buttons: [
      {
        name: "Live",
        label: {
          nl: "Live url",
          en: "Live",
        },
        link: "https://candid-mousse-99e5c1.netlify.app",
        icon: FiLink,
        color: "bg-gradient-to-r from-teal-500 to-cyan-500",
      },
      {
        name: "Demo",
        label: {
          nl: "Demo",
          en: "Demo",
        },
        link: "https://github.com/seetha1730/Live-Quiz-board-frontend",
        icon: FiGithub,
        color: "bg-gray-900 text-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0",
      },
    ]
  },
  {
    title_EN: "My portfolio",
    title:"Mijn portfolio",
    description: "Leidde de creatie van een Point of Sale (POS)-systeem op maat voor B2B-gebruik, gericht op supermarkten. Biedt een gebruiksvriendelijke interface voor het beheren van producten, winkelwagentjes en betalingsverwerking. Implementeert verschillende gebruikersprofielen (beheerder, kassier, klant) met specifieke rechten voor verbeterde beveiliging.",
    description_EN:
      "Led the creation of a Point of Sale (POS) system tailored for B2B use, targeting grocery stores. Provided a user-friendly interface for managing products, shopping carts, and payment processing .Implemented distinct user proles (Admin, Cashier, Customer) with specific privileges for enhanced security. ",
    technologies: [
      { name: "React", icon: reacticon },
      { name: "JavaScript", icon: javascripticon },
      { name:"Tailwind Css",icon:tailwindcssicon},
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
    ],
    image:portfolioImage,
      buttons: [
        {
          name: "Live",
          label: {
            nl: "Live url",
            en: "Live",
          },
          icon: FiLink,
          color: "bg-gradient-to-r from-teal-500 to-cyan-500",
        link:"seetha.dev"
        },
        {
          name: "Demo",
          label: {
            nl: "Demo",
            en: "Demo",
          },
          icon: FiGithub,
          link:"https://github.com/seetha1730/portfolio-react-tailwind",
          color: "bg-gray-900 text-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0",
        },
      ]
  },
  {
    title_EN: "B2B Grocery store - POS System",
    title: "B2B Kruidenier - Kassasysteem",
    description:
      "Leidde de creatie van een Point of Sale (POS)-systeem op maat voor B2B-gebruik, gericht op supermarkten. Biedt een gebruiksvriendelijke interface voor het beheren van producten, winkelwagentjes en betalingsverwerking. Implementeert verschillende gebruikersprofielen (beheerder, kassier, klant) met specifieke rechten voor verbeterde beveiliging.",
    description_EN:
      "Led the creation of a Point of Sale (POS) system tailored for B2B use, targeting grocery stores. Provided a user-friendly interface for managing products, shopping carts, and payment processing .Implemented distinct user proles (Admin, Cashier, Customer) with specific privileges for enhanced security. ",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "REST Api", icon: apiicon },
      { name: "Express", icon: expressicon },
      { name: "Node.js", icon: nodejsicon },
      {name:"Handlebar JS", icon:handlebaricon},
      {name:"Bootstrap",icon:bootstrapicon}
    ],
    image:posImage,

    
      buttons: [
        {
          name: "Live",
          label: {
            nl: "Live url",
            en: "Live",
          },
          icon: FiLink,
          color: "bg-gradient-to-r from-teal-500 to-cyan-500",
        link:"https://easy-ruby-viper-cape.cyclic.cloud"
        },
        {
          name: "Demo",
          label: {
            nl: "Demo",
            en: "Demo",
          },
          icon: FiGithub,
          link:"https://github.com/seetha1730/B2B-Grocery-POS-System.git",
          color: "bg-gray-900 text-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0",
        },
      ]
  },
  {
    title_EN: "Chick and Eggs Word Game",
    title:"Kuiken en eieren woordspel",
    description:
      "Een boeiend woordraadspel ontwikkeld dat spelers op verschillende niveaus uitdaagt. Er is een live-URL gemaakt waarmee gebruikers de interactieve functies van de game kunnen ervaren. Er is gebruik gemaakt van Cascading Style Sheets (CSS), JavaScript en HTML5 om het spel te bouwen.",
    description_EN:
      "Developed an engaging word-guessing game challenging players through different levels. Created a live URL for users to experience the game's interactive features. Utilized Cascading Style Sheets (CSS), JavaScript, and HTML5 to build the game.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
     
    ],
    image:chickEggimage,
    buttons: [
      {
        name: "Live",
        label: {
          nl: "Live url",
          en: "Live",
        },
        icon: FiLink,
        color: "bg-gradient-to-r from-teal-500 to-cyan-500",
      link:"https://adorable-brigadeiros-5d8d76.netlify.app/"
      },
      {
        name: "Demo",
        label: {
          nl: "Demo",
          en: "Demo",
        },
        icon: FiGithub,
        link:"https://github.com/seetha1730/Chic-Eggs.git",
        color: "bg-gray-900 text-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0",
      },
    ]

  },
] 



export const skillsDataWeb = [
  {
    skillsTitle: "Web Development",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "Bootstrap",
        hash: "#Bootstrap",
        icon: bootstrapicon,
        color: "#7C4DFF",
      },
      {
        title: "jQuery",
        hash: "#jQuery",
        icon: jqueryicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
     
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: nextjsicon,
        color: "#000000",
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: handlebaricon,
        color: "#CD9A9A",
      },
    
      {
        title: "Express",
        hash: "#Express",
        icon: expressicon,
        color: "#000000",
      },
      {
        title: "Websocket",
        hash: "#websocket",
        icon:socketicon,
        color: "#000000",
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
    ],
  },
]

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "Adobe XD",
        hash: "#Adobe XD",
        icon: adobexdicon,
        color: "#FF61F6",
      },
      {
        title: "Adobe Photoshop",
        hash: "#Adobe PS",
        icon: photoshopicon,
        color: "#03A9F4",
      },
      
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] 

export const skillsDataCMS = [
  {
    skillsTitle: "CMS",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
      {
        title: "Shopify",
        hash: "#Shopify",
        icon: woocommerceicon,
        color: "#A64A7B",
      },
      {
        title: "Adobe CQ5",
        hash: "Adobe CQ5",
        icon: adobecq5icon,
        color: "#4353FF",
      },
    ],
  },
] 

export const navLinks = [
  { nl: "Home", en: "Home", hash: "home" },
  { nl: "Vaardigheden", en: "Skills", hash: "skills"},
  { nl: "Projecten", en: "Projects", hash: "projects"},
  { nl: "Over mij", en: "About me", hash: "about-me" },
  { nl: "Contact", en: "Contact", hash: "contact" },
  { nl: "CV", en: "Resume", hash: "cv" },

] 




export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/seetha/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/seetha1730",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:seetharaj1990@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
]




export const aboutMeData = {
  title: "Over mij",
  title_EN: "About me",
  paragraphs: [
    {
      title: "Ervaringshoogtepunten:",
      title_EN: "Experience Highlights",
      description_EN:
        "Led the development of an interactive live quiz and a B2B Grocery POS System at Ironhack, Netherlands, with expertise in Tailwind CSS, React, Socket.io, and more.",
      description:
        "Leidde de ontwikkeling van een interactieve live quiz en een B2B Grocery POS System bij Ironhack, Nederland, met expertise in Tailwind CSS, React, Socket.io, en meer.",
    },
    {
      description_EN:
        "As a freelancer at Sakshan Store, Utrecht, I created an online retail platform for Indian grocers using WordPress and WooCommerce. I managed orders and ensured smooth business operations.",
      description:
        "Als freelancer bij Sakshan Store, Utrecht, heb ik een online retailplatform voor Indiase kruideniers gemaakt met behulp van WordPress en WooCommerce. Hierbij beheerde ik bestellingen en zorgde ik voor een soepele bedrijfsvoering.",
    },
    {
      description_EN:
        "At Infosys Ltd I contributed to major projects for clients such as ATT and GSK. I developed HTML presentations using HTML5, CSS3, jQuery and JavaScript, and improved functionality with Bootstrap and Angular.js.",
      description:
        "Bij Infosys Ltd heb ik bijgedragen aan grote projecten voor klanten zoals ATT en GSK. Hierbij heb ik HTML-presentaties ontwikkeld met behulp van HTML5, CSS3, jQuery en JavaScript, en de functionaliteit verbeterd met Bootstrap en Angular.js.",
    },
    {
      description_EN:
        "As a UI Developer at Sybrant Technology, my focus was on designing fully responsive website skins with HTML, CSS, jQuery, Bootstrap, PHP, MySQL and JavaScript.",
      description:
        "Als UI Developer bij Sybrant Technology lag mijn focus op het ontwerpen van volledig responsieve website skins met HTML, CSS, jQuery, Bootstrap, PHP, MySQL en JavaScript.",
    },
    {
      description_EN:
        "My career started as an Executive Web Researcher at Mobius Knowledge Services, where I specialized in collecting and converting internet data into valuable insights for clients like Tom Tom.",
      description:
        "Mijn carrière begon als Executive Web Researcher bij Mobius Knowledge Services, waar ik gespecialiseerd was in het verzamelen en omzetten van internetgegevens in waardevolle inzichten voor klanten zoals Tom Tom.",
    },
    {
      description_EN:
        "In addition to my technical skills, I bring creative thinking, teamwork, adaptability and effective time management. Recognized for my strong work ethic, I stay up-to-date with the latest technologies.",
      description:
        "Naast mijn technische vaardigheden breng ik creatief denken, teamwork, aanpassingsvermogen en effectief tijdmanagement mee. Erkend om mijn sterke werkethiek, blijf ik up-to-date met de nieuwste technologieën.",
    },
  ],
};

export const contactData = {
  title: {
    nl: "Contact",
    en: "Contact",
  },
  description: {
    nl: "Schrijf me een bericht en ik zal zo spoedig mogelijk contact met je opnemen.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "Naam",
      name_EN: "Name",
      placeholder: {
        nl: "Jouw Naam",
        en: "Your Name",
      },
      type: "text",
      validation: {
        nl: "Vul alsjeblieft je naam in",
        en: "Please fill in your name",
      },
    
    },
    {
      name: "Email",
      name_EN: "Email",
      placeholder: {
        nl: "Jouw E-Mail Adres",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        nl: "Vul alsjeblieft je e-mailadres in",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "Onderwerp",
      name_EN:"Subject",
      placeholder: {
        nl: "Jouw Onderwerp",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        nl: "Vul alsjeblieft je onderwerp in",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      nl: "Jouw Bericht",
      en: "Your Message",
    },
    name_EN: "Message",
    name:"Bericht",
    rows: 10,
    validation: {
      nl: "Vul alsjeblieft je bericht in",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      nl: "Verzenden",
      en: "Send",
    },
  },
  
};




export const buttonLabels = {
  language: {
    nl: "NL",
    en: "EN",
  },
} 

