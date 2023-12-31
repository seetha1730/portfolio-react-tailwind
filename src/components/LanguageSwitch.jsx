import React from "react";
import { useLanguage } from "../context/lang-context";
import { buttonLabels } from "../assets/lib/data";

const LanguageSwitch = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <>

            <label className="flex mr-3 items-center relative w-max cursor-pointer select-none" data-tg-off={buttonLabels.language.nl}

                data-tg-on={buttonLabels.language.en}>

                <span className="text-lg font-bold mr-3"></span>
                <input type="checkbox" id="toggle-language"

                    onChange={toggleLanguage}
                    checked={language === "en"} className="appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full  bg-gradient-to-r from-teal-500 to-cyan-500 dark:text-white-400 hover:bg-gray-800 dark:hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2   bg-gray-500" />
                <span className="absolute font-medium text-xs uppercase right-8 text-white dark:text-gray-900"> NL </span>
                <span className="absolute font-medium text-xs uppercase right-2 text-white dark:text-gray-900"> EN </span>

                <span className="w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-gray-200" />
            </label>




        </>
    );
};

export default LanguageSwitch;
