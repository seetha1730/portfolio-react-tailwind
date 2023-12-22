import React from 'react';


function Button({
  onClick,
  label,
  link,
  buttoncolor,
  buttonhovercolor,
  type,
  iconSVG: IconSVGComponent,

}) {
  return (
    <a href={link} className="no-underline">
 <button  className={`text-white drop-shadow-2xl border-none py-4 px-8 rounded-lg text-[1.6rem] transition-all duration-200 flex flex-row gap-4 justify-center items-center cursor-pointer ${buttoncolor} ${buttonhovercolor} max-lg:text-3xl max-lg:py-8 max-lg:px-16 max-lg:rounded-xl
    shadow-xl hover:scale-100 hover:-translate-y-2 hover:drop-shadow-xl transition-all duration-200 w-max`}>
          {IconSVGComponent ? (
            <IconSVGComponent className={"w-6 h-10"} />
          ) : (
            <img
              src={buttoncolor || ""}
              alt={`${label}-icon`}
              className={`bg-[${buttoncolor || ""}] w-full `}
            />
          )}
          {label}
        </button>
    </a>
  );
}

export default Button;
