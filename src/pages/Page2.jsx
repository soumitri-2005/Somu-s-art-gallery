import React, { useEffect, useRef } from "react";
import MoodIcon from "@mui/icons-material/Mood";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import PaletteIcon from "@mui/icons-material/Palette";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import gsap from "gsap";

const Page2 = () => {
  const parentRef = useRef(null);
  useEffect(() => {
    const handleWheel = (dets) => {
      const children = parentRef.current?.children;
      if (!children) return;

      Array.from(children).forEach((child) => {
        if (child.classList.contains("scroll-item-left")) {
          gsap.to(child, {
            x: dets.deltaY > 0 ? "-20%" : "0%",
            duration: 3,
            repeat: -1,
            ease: "none",
          });
        } else if (child.classList.contains("scroll-item-right")) {
          gsap.to(child, {
            x: dets.deltaY > 0 ? "20%" : "0%",
            duration: 3,
            repeat: -1,
            ease: "none",
          });
        }
      });
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      className="page2 h-[600px] w-full flex items-center justify-center flex-col gap-[0.7rem] mt-[2.5rem]"
      ref={parentRef}
    >
      <div className="first scroll-item-left">
        <div className="h-full w-[5%] bg-[#141212]">
          <MoodIcon style={{ fontSize: "2.5rem", color: "#6a4c93" }} />
        </div>
        <p className="text-[5.7rem] font-two font-bold text-[#ffca3a]">
          Explore
        </p>
        <div className="h-full w-[10%] bg-[#8ac926]">
          <LocalFloristIcon style={{ fontSize: "2.5rem", color: "pink" }} />
        </div>
        <div className="h-full w-[5%] bg-[#1982c4]">
          <PaletteIcon style={{ fontSize: "2.5rem", color: "#000" }} />
        </div>
        <div className="h-full w-[15%] bg-[#6a4c93]">
          <AutoAwesomeIcon style={{ fontSize: "2.5rem", color: "#ffca3a" }} />
        </div>
        <div className="h-full w-[5%] bg-[#141212]">
          <MoodIcon style={{ fontSize: "2.5rem", color: "#6a4c93" }} />
        </div>
        <p className="text-[5.7rem] font-two font-bold text-[#ffca3a]">
          Explore
        </p>
        <div className="h-full w-[10%] bg-[#8ac926]">
          <LocalFloristIcon style={{ fontSize: "2.5rem", color: "pink" }} />
        </div>
        <div className="h-full w-[5%] bg-[#1982c4]">
          <PaletteIcon style={{ fontSize: "2.5rem", color: "#000" }} />
        </div>
        <div className="h-full w-[15%] bg-[#6a4c93]">
          <AutoAwesomeIcon style={{ fontSize: "2.5rem", color: "#ffca3a" }} />
        </div>
      </div>

      <div className="second scroll-item-right">
        <div className="h-full w-[10%] bg-[#1982c4]">
          <PaletteIcon style={{ fontSize: "2.5rem", color: "#8ac926" }} />
        </div>
        <div className="h-full w-[14%] bg-[#6a4c93]">
          <AutoAwesomeIcon style={{ fontSize: "2.5rem", color: "#ff595e" }} />
        </div>
        <p className="text-[5.7rem] font-two text-[#000]">More</p>
        <div className="h-full w-[10%] bg-[#ffca3a]">
          <MoodIcon style={{ fontSize: "2.5rem", color: "#141212" }} />
        </div>
        <div className="h-full w-[5%] bg-[#8ac926]">
          <LocalFloristIcon style={{ fontSize: "2.5rem", color: "#1982c4" }} />
        </div>
        <div className="h-full w-[10%] bg-[#1982c4]">
          <PaletteIcon style={{ fontSize: "2.5rem", color: "#8ac926" }} />
        </div>
        <div className="h-full w-[14%] bg-[#6a4c93]">
          <AutoAwesomeIcon style={{ fontSize: "2.5rem", color: "#ff595e" }} />
        </div>
        <p className="text-[5.7rem] font-two text-[#000]">More</p>
        <div className="h-full w-[10%] bg-[#ffca3a]">
          <MoodIcon style={{ fontSize: "2.5rem", color: "#141212" }} />
        </div>
        <div className="h-full w-[5%] bg-[#8ac926]">
          <LocalFloristIcon style={{ fontSize: "2.5rem", color: "#1982c4" }} />
        </div>
      </div>

      <div className="third scroll-item-left">
        <p className="text-[5.7rem] font-two font-bold text-[#6a4c93]">Know</p>
        <div className="h-full w-[7.5%] bg-[#ff595e]">
          <LocalFloristIcon style={{ fontSize: "2.5rem", color: "#000" }} />
        </div>
        <div className="h-full w-[10%] bg-[#ffca3a]">
          <MoodIcon style={{ fontSize: "2.5rem", color: "#8ac926" }} />
        </div>
        <div className="h-full w-[5%] bg-[#8ac926]">
          <AutoAwesomeIcon style={{ fontSize: "2.5rem", color: "#141212" }} />
        </div>
        <div className="h-full w-[15%] bg-[#000]">
          <PaletteIcon style={{ fontSize: "2.5rem", color: "#6a4c93" }} />
        </div>
        <p className="text-[5.7rem] font-two font-bold text-[#6a4c93]">Know</p>
        <div className="h-full w-[7.5%] bg-[#ff595e]">
          <LocalFloristIcon style={{ fontSize: "2.5rem", color: "#000" }} />
        </div>
        <div className="h-full w-[10%] bg-[#ffca3a]">
          <MoodIcon style={{ fontSize: "2.5rem", color: "#8ac926" }} />
        </div>
        <div className="h-full w-[5%] bg-[#8ac926]">
          <AutoAwesomeIcon style={{ fontSize: "2.5rem", color: "#141212" }} />
        </div>
        <div className="h-full w-[15%] bg-[#000]">
          <PaletteIcon style={{ fontSize: "2.5rem", color: "#6a4c93" }} />
        </div>
      </div>

      <div className="fourth scroll-item-right">
        <div className="h-full w-[5%] bg-[#ffca3a]">
          <MoodIcon style={{ fontSize: "2.5rem", color: "#6a4c93" }} />
        </div>
        <div className="h-full w-[10%] bg-[#000]">
          <AutoAwesomeIcon style={{ fontSize: "2.5rem", color: "#ffca3a" }} />
        </div>
        <div className="h-full w-[9.5%] bg-[#6a4c93]">
          <PaletteIcon style={{ fontSize: "2.5rem", color: "#ff595e" }} />
        </div>
        <p className="text-[5.7rem] font-two text-[#1982c4]">More</p>
        <div className="h-full w-[15%] bg-[#ff595e]">
          <LocalFloristIcon style={{ fontSize: "2.5rem", color: "#8ac926" }} />
        </div>
        <div className="h-full w-[5%] bg-[#ffca3a]">
          <MoodIcon style={{ fontSize: "2.5rem", color: "#6a4c93" }} />
        </div>
        <div className="h-full w-[10%] bg-[#000]">
          <AutoAwesomeIcon style={{ fontSize: "2.5rem", color: "#ffca3a" }} />
        </div>
        <div className="h-full w-[9.5%] bg-[#6a4c93]">
          <PaletteIcon style={{ fontSize: "2.5rem", color: "#ff595e" }} />
        </div>
        <p className="text-[5.7rem] font-two text-[#1982c4]">More</p>
        <div className="h-full w-[15%] bg-[#ff595e]">
          <LocalFloristIcon style={{ fontSize: "2.5rem", color: "#8ac926" }} />
        </div>
      </div>
    </div>
  );
};

export default Page2;
