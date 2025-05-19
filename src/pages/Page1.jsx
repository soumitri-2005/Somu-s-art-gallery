import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import bowOneImg from "../images/bow1.png";
import bowTwoImg from "../images/bow2.png";
import candyImg from "../images/candy.png";
import catImg from "../images/cat.png";
import questionMarkImg from "../images/question-mark.png";
import starOneImg from "../images/star1.png";
import starTwoImg from "../images/star2.png";
import straberryImg from "../images/strawberry.png";
import lineImg from "../images/line.png";

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
        <h1 className="heading-text font-two font-[900] absolute text-[4rem] top-[38%] right-[6.5rem] rotate-6 text-[#247b7dac]">
          to
        </h1>
        <h1 className="heading-text font-three absolute text-[4rem] top-[52%] left-[7rem]">
          Somu's
        </h1>
        <h1 className="heading-text font-two absolute text-[4rem] bottom-[-1.5rem] right-[-2.5rem]">
          Gallery
        </h1>
      </div>

      <div className="pictures h-[70%] w-[70%] flex flex-row justify-center items-end gap-[1rem]">
        <div className="one relative h-[100%] w-[30%]">
          <img
            src={bowOneImg}
            className="h-[70px] w-auto absolute top-20 left-20 -rotate-45"
          />
          <img
            src={starTwoImg}
            className="h-[150px] w-auto absolute top-[170px] left-16 -rotate-[120deg] z-10"
          />
          <img
            src={straberryImg}
            className="h-[100px] w-auto absolute top-20 right-3 -rotate-[80deg]"
          />
          <img
            src={lineImg}
            className="h-[110px] w-auto absolute bottom-[100px] -right-12 -rotate-[100deg]"
          />
        </div>
        <div className="cat h-[90%] w-[30%] flex justify-center relative items-center">
          <img src={catImg} className="h-full w-auto" />
          <div class="w-[15rem] h-24 rounded-full bg-black blur-lg absolute -bottom-11 right-[4rem]"></div>
        </div>
        <div className="two h-[100%] w-[30%] relative">
          <img
            src={starOneImg}
            className="h-[90px] w-auto absolute -rotate-[25deg] top-12"
          />
          <img
            src={bowTwoImg}
            className="h-[130px] w-auto absolute top-[25%] left-[30%] rotate-[50deg]"
          />
          <img
            src={candyImg}
            className="h-[100px] w-auto absolute bottom-[20%] right-[40%] -rotate-[20deg]"
          />
          <img
            src={questionMarkImg}
            className="h-[100px] w-auto absolute top-[50%] rotate-[20deg] left-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Page1;
