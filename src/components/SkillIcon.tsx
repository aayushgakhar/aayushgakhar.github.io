import React from "react";

const SkillIcon = ({ icon }:any) => {
  const domRef = React.useRef();


  return (
    <div
      // ref={domRef}
      className={"opacity-100 scale-75 hover:scale-110 transition"
      }
    >
      <img
        className="w-20 mx-auto my-4 shadow-lg"
        src={icon.icon}
        alt={icon.name}
      />
    </div>
  );
};

export default SkillIcon;
