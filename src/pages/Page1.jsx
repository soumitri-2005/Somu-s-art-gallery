import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import bowOneImg from "../images/bow1.png";
import bowTwoImg from "../images/bow2.png";
import bowThreeImg from "../images/bow3.png";
import candyImg from "../images/candy.png";
import catImg from "../images/cat.png";
import questionMarkImg from "../images/question-mark.png";
import starOneImg from "../images/star1.png";
import starTwoImg from "../images/star2.png";
import shoeImg from "../images/shoe.png";
import straberryImg from "../images/strawberry.png";

const Page1 = () => {
  useGSAP(function () {
    gsap.from(".heading-text", {
      scale: 0.2,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
      stagger: 0.2,
    });
  });

  return (
    <div className="page1 bg-white h-screen w-full flex justify-center items-center justify-content-evenly flex-col gap-[1rem]">
      <div className="heading h-[30%] w-[35%] relative mt-10">
        <h1 className="heading-text font-two absolute text-[5rem] top-[10%] left-0 -rotate-[5deg]">
          Welcome
        </h1>
        <h1 className="heading-text font-two font-[900] absolute text-[4rem] top-[38%] right-[6.5rem] rotate-6">
          to
        </h1>
        <h1 className="heading-text font-three absolute text-[4rem] top-[52%] left-[7rem]">
          Somu's
        </h1>
        <h1 className="heading-text font-two absolute text-[4rem] bottom-[-1.5rem] right-[-2.5rem]">
          Gallery
        </h1>
      </div>

      <div className="pictures h-[70%] w-[70%] relative">
        <img src={bowOneImg} alt="" className="absolute " />
        <img src={bowTwoImg} alt="" className="absolute" />
        <img src={bowThreeImg} alt="" className="absolute" />
        <img src={candyImg} alt="" className="absolute" />
        <div className="cat absolute">
          <img src={catImg} alt="" className="h-full w-full"/>
        </div>
        <img src={questionMarkImg} alt="" className="absolute" />
        <img src={shoeImg} alt="" className="absolute" />
        <img src={starOneImg} alt="" className="absolute" />
        <img src={starTwoImg} alt="" className="absolute" />
        <img src={straberryImg} alt="" className="absolute" />
      </div>
    </div>
  );
};

export default Page1;
