import React from "react";
import palletImg from "../images/color-palette.png";
import arrowImg from "../images/arrow.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  useGSAP(function () {
    gsap.to(".arrow-line", {
      rotation: 15,        
      duration: 0.4,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
    gsap.from(".header", {
      opacity: 0,
      duration: 2.5,
    });
  });

  return (
    <div className="header absolute h-[200px] w-[150px]">
      <div className="button-img h-[4.4rem] w-[4.4rem] mt-4 ml-4">
        <img src={palletImg} className="h-full w-full"/>
      </div>
      <div className="arrow-line">
        <img
          src={arrowImg}
          className=" -rotate-[150deg] h-[3rem] w-[3rem] mt-0 ml-12"
        />
      </div>
      <p className="text-[1.1rem] font-one ml-8">Click Me!</p>
    </div>
  );
};

export default Header;
