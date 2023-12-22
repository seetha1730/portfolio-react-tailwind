import { useEffect, useState, createContext, useContext } from "react";

const languageValues = ["en", "nl"];

const LanguageContext = createContext(null);

export default function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    if (language === "en") {
      setLanguage("nl");
      window.localStorage.setItem("language", "nl");
      document.documentElement.classList.add("nl");
    } else {
      setLanguage("en");
      window.localStorage.setItem("language", "en");
      document.documentElement.classList.remove("nl");
    }
  };

  useEffect(() => {
    const localLanguage = window.localStorage.getItem("language");

    if (localLanguage && languageValues.includes(localLanguage)) {
      setLanguage(localLanguage);

      if (localLanguage === "nl") {
        document.documentElement.classList.add("nl");
      }
    } else if (window.matchMedia("(prefers-color-scheme: NL)").matches) {
      setLanguage("nl");
      document.documentElement.classList.add("nl");
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error("useLanguage must be used within a LanguageContextProvider");
  }

  return context;
}