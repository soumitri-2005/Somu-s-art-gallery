import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import GrassIcon from "@mui/icons-material/Grass";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";

const Page6 = () => {
  const cursorRef = useRef(null);

  useGSAP(() => {
    gsap.from(".icon", {
      opacity: 0,
      duration: 3,
      scrollTrigger: {
        trigger: ".icon",
      },
    });
    gsap.from(".message", {
      scale: 0,
      duration: 0.8,
      stagger: 0.4,
      ease: "back.out(1.5)",
      scrollTrigger: {
        trigger: ".message",
      },
    });
  });

  useEffect(() => {
    const cursor = cursorRef.current;
    const messages = document.querySelectorAll(".message");

    messages.forEach((msg) => {
      msg.style.cursor = "none"; 

      const moveCursor = (e) => {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: "power3.out",
        });
      };

      const handleMouseEnter = () => {
        cursor.style.opacity = "1"; 
        gsap.to(cursor, {
          scale: 1.5,
          backgroundColor: "#ffca3a",
          duration: 0.3,
        });
      };

      const handleMouseLeave = () => {
        cursor.style.opacity = "0"; 
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: "#1982c4",
          duration: 0.3,
        });
      };

      msg.addEventListener("mousemove", moveCursor);
      msg.addEventListener("mouseenter", handleMouseEnter);
      msg.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        msg.removeEventListener("mousemove", moveCursor);
        msg.removeEventListener("mouseenter", handleMouseEnter);
        msg.removeEventListener("mouseleave", handleMouseLeave);
      };
    });

    cursor.style.opacity = "0";
  }, []);

  return (
    <div className="page6 w-full h-screen flex items-center justify-center bg-gradient-to-b from-white via-orange-100 relative">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 70,
          height: 70,
          borderRadius: "50%",
          backgroundColor: "#1982c4",
          pointerEvents: "none",
          transform: "translate(-50%, -50%) scale(1)",
          zIndex: 9999,
          mixBlendMode: "difference",
          opacity: 0, // start hidden
          transition: "opacity 0.3s ease",
        }}
      ></div>

      <div className="h-full w-[700px] relative">
        <div className="h-[20px] w-[20px] bg-black absolute rounded-[50%] left-[49.3%] top-[19%]"></div>
        <div className="h-[420px] w-[10px] bg-black absolute top-[20%] left-1/2"></div>
        <div className="w-[200px] h-[40px] rounded-[50%] bg-black absolute left-[37%] top-[77%]"></div>
        <div className="messages absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
          <div className="message bg-[#ffca3a] w-[8rem] p-1 ml-[4.4rem] shadow-[2px_2px_10px_#ffca3a]">
            Now
          </div>
          <div className="message bg-[#6a4c93] w-[11rem] p-2 ml-11 rotate-3 shadow-[2px_2px_10px_#6a4c93]">
            you are
          </div>
          <div className="message bg-[#ff595e] w-[13rem] p-1 ml-8 shadow-[2px_2px_10px_#ff595e]">
            going to
          </div>
          <div className="message bg-[#8ac926] w-[14rem] p-3 ml-6 -rotate-3 shadow-[2px_2px_10px_#8ac926]">
            enter into
          </div>
          <div className="message bg-[#1982c4] w-[16rem] p-4 ml-2 shadow-[2px_2px_10px_#1982c4]">
            Sketchbook !
          </div>
        </div>
        <GrassIcon
          className="icon"
          style={{
            fontSize: "4rem",
            color: "#8ac926",
            position: "absolute",
            bottom: "18%",
            left: "33%",
          }}
        />
        <GrassIcon
          className="icon"
          style={{
            fontSize: "2.5rem",
            color: "#8ac926",
            position: "absolute",
            bottom: "20%",
            right: "34%",
          }}
        />
        <EmojiNatureIcon
          className="icon"
          style={{
            fontSize: "2.5rem",
            color: "#ff595e",
            position: "absolute",
            top: "20%",
            right: "35%",
          }}
        />
      </div>
    </div>
  );
};

export default Page6;
