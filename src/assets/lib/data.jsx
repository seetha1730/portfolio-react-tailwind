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
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
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
        nl: "Neem contact met me op",
        en: "Contact me",
      },
      icon: FiMail,
      color: "bg-gradient-to-r from-teal-500 to-cyan-500",
    },
    {
      name: "Projects",
      label: {
        nl: "Mijn projecten",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "bg-gray-900 text-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0",
    },
  ],
};

export const projectsData = [
  {
    title: "Interactive Live Quiz Board",
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
    title: "My portfolio",
    description:
      "Leidde de creatie van een Point of Sale (POS)-systeem op maat voor B2B-gebruik, gericht op supermarkten. Biedt een gebruiksvriendelijke interface voor het beheren van producten, winkelwagentjes en betalingsverwerking. Implementeert verschillende gebruikersprofielen (beheerder, kassier, klant) met specifieke rechten voor verbeterde beveiliging.",
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
    title: "B2B Grocery store - POS System",
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
      { name: "Express", icon: expressiconwhite },
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
    title: "Chick and Eggs",
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
        icon: [nextjsicon],
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
  { nl: "Home", en: "Home", hash: "home", icon: GoHome },
  { nl: "Vaardigheden", en: "Skills", hash: "skills", icon: GoStack },
  { nl: "Projecten", en: "Projects", hash: "projects", icon: GoProject },
  { nl: "Over mij", en: "About me", hash: "about-me", icon: GoPerson },
  { nl: "Contact", en: "Contact", hash: "contact", icon: GoMail },
  { nl: "CV", en: "Resume", hash: "cv", icon: GoMail },

] 

export const FooterLinks = [

] 

export const sideBarRightMail = {
  link: "mailto:myemail@com",
  text: "myemail@com",
} 

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/alpay/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/AlpayC",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:myemail@com",
    icon: FiMail,
    altimgname: "mail",
  },
]




export const aboutMeData = {
  title: "Über mich",
  title_EN: "About me",
  description: "Ein paar Codeschnippsel über mich",
  description_EN: "A few code snippets about me",
  paragraphs_nl: [
    {
      title: "Die Schaltkreise meines Herzens",
      description:
        "Wenn ich nicht in der digitalen Welt unterwegs bin, durchstreife ich die faszinierende Welt der Technik und Hardware. Schaltkreise und Lötstellen sind für mich wie Puzzleteile eines aufregenden Abenteuers.",
      icon: hardwareicon,
    },
    {
      title: "Auf der Überholspur des Lebens",
      description:
        "Neben dem Coden befinde ich mich gerne auf der Überholspur – im wahrsten Sinne des Wortes. Autos sind meine Leidenschaft, und ich genieße es, mit PS-starken Maschinen auf unbekannten Straßen unterwegs zu sein.",
      icon: caricon,
    },
    {
      title: "Entdeckungsfreude als Lebensmotto",
      description:
        "Meine Reise als Webentwickler ist nur ein Teil meines Lebenswegs. Ich lebe nach dem Motto, dass das Abenteuer erst beginnt, wenn man das Bekannte hinter sich lässt. Das Entdecken neuer Orte ist meine Form der kreativen Inspiration.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "The Circuits of My Heart",
      description:
        "When I'm not navigating the digital world, I explore the fascinating realm of technology and hardware. Circuits and solder joints are like puzzle pieces to me in an exciting adventure.",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    nl: "Kontakt",
    en: "Contact",
  },
  description: {
    nl: "Schreib mir eine Nachricht und ich melde mich bei dir.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        nl: "Dein Name",
        en: "Your Name",
      },
      type: "text",
      validation: {
        nl: "Bitte gebe deinen Namen ein",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        nl: "Deine E-Mail Adresse",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        nl: "Bitte gebe deine Email ein",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        nl: "Deine Betreff",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        nl: "Bitte gebe einen Betreff ein",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      nl: "Deine Nachricht",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      nl: "Bitte gebe deine Nachricht ein",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      nl: "Absenden",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      nl: "Ich stimme zu, dass Alpay meine personenbezogenen Daten (Name und E-Mail-Adresse) verwenden darf, um mit mir Kontakt aufzunehmen.",
      en: "I agree that Alpay may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      nl: "Durch Übermittlung dieser Anfrage bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} 

export const toastMessages = {
  loadingProject: {
    nl: "🦄 Die Live Demo wird gleich geöffnet. Server werden gestartet...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    nl: "🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    nl: "🦄 Leider hat der Versand deiner Email nicht geklappt. Bitte versuche es später noch einmal",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    nl: "Bitte gebe deinen Namen ein",
    en: "Please fill in your name",
  },
} 

export const buttonLabels = {
  language: {
    nl: "NL",
    en: "EN",
  },
} 

