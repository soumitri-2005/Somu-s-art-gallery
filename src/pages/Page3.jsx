import React, { useRef } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import picImg from "../images/pic.jpg";
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import SpaIcon from '@mui/icons-material/Spa';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
  gsap.from(".about", {
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    y: 100,
    opacity: 0,
    duration: 3, // Slower
    ease: "power4.out",
  });

  gsap.from(".msg", {
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    x: -100,
    opacity: 0,
    duration: 2, // Slower
    delay: 0.4,
    ease: "power4.out",
  });

  gsap.from(".pic", {
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    x: 100,
    opacity: 0,
    duration: 2, // Slower
    delay: 0.6,
    ease: "power4.out",
  });
}, []);


  return (
    <div
      ref={containerRef}
      className="page3 h-screen w-full bg-gradient-to-b from-white via-purple-400 to-white flex justify-center items-center relative"
    >
      <SpaIcon
        style={{  
          fontSize: "4rem",
          color: "#8ac926",
          position: "absolute",
          bottom: "13%",
          left: "21%",
          zIndex: 1,
        }}
      />
      <EmojiNatureIcon
        style={{
          fontSize: "4rem",
          color: "#ff595e",
          position: "absolute",
          top: "12%",
          right: "21%",
          zIndex: 1,
        }}
      />
      <div className="about h-[70%] w-[55%] flex justify-center items-center justify-content-evenly bg-black border rounded-xl shadow-lg p-8">
        <div className="msg h-full w-[55%] flex flex-col justify-center items-start mt-24 ml-4">
          <h1 className="h-[20%] w-auto text-center font-three text-[3rem] text-[#ffca3a] pl-5 pr-5 mt-[1rem] mb-[1rem]">
            About me!
          </h1>
          <p className="h-[80%] w-full text-justify pr-14 mt-5 font-one text-[#fff]">
            Hiii! I'm{" "}
            <span className="bg-cyan-600 font-bold ">Soumitri Mishra,</span> a
            B.Tech student with a passion for sketching and creativity. I made
            this website to showcase my art, from pencil portraits to colorful
            illustrations, each piece reflects a part of me. Combining my love
            for technology and art, this site is not just a portfolio, but a
            glimpse into <span className="bg-red-400">my creative world</span>.
            Thanks for visiting, and I hope you enjoy the journey through my
            sketchbook! 🌻
          </p>
        </div>
        <div className="pic h-[90%] w-[45%] bg-white rounded-2xl shadow-lg">
          <div className="user-name h-[10%] w-full flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="h-[28px] w-[28px] bg-purple-700 rounded-full mt-[10px] ml-[10px]">
                <FilterVintageIcon
                  style={{
                    fontSize: "1.3rem",
                    color: "#ffca3a",
                    margin: "3px",
                  }}
                />
              </div>
              <p className="text-[1rem] font-one font-bold mt-1">mesomu__</p>
            </div>
            <MoreHorizIcon
              style={{
                fontSize: "1.7rem",
                color: "#6a4c93",
                margin: "10px 10px 0 0",
              }}
            />
          </div>
          <div className="user-img h-[80%] w-full mt-1">
            <img src={picImg} className="h-full w-full object-cover" />
          </div>
          <div className="icons flex justify-between items-center">
            <div>
              <FavoriteIcon
                style={{
                  fontSize: "1.3rem",
                  color: "red",
                  margin: "3px 0 0 10px",
                }}
              />
              <ChatBubbleOutlineIcon
                style={{
                  fontSize: "1.3rem",
                  color: "black",
                  margin: "3px 0 0 10px",
                }}
              />
              <SendIcon
                style={{
                  fontSize: "1.3rem",
                  color: "black",
                  margin: "3px 0 0 10px",
                }}
              />
            </div>
            <div>
              <TurnedInNotIcon
                style={{
                  fontSize: "1.3rem",
                  color: "black",
                  margin: "3px 10px 0 10px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
