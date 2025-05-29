import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const letters = headingRef.current.querySelectorAll("span");

    gsap.set(letters, { opacity: 0, y: 90 });

    gsap.to(letters, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    letters.forEach((letter) => {
      letter.addEventListener("mouseenter", () => {
        gsap.to(letter, {
          y: -10,
          color: "#1982c4", 
          duration: 0.3,
          ease: "power1.out",
        });
      });
      letter.addEventListener("mouseleave", () => {
        gsap.to(letter, {
          y: 0,
          color: "#000000",
          duration: 0.3,
          ease: "power1.out",
        });
      });
    });

    // Cleanup listeners on unmount
    return () => {
      letters.forEach((letter) => {
        letter.removeEventListener("mouseenter", () => {});
        letter.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  const text = "Contact Me!";

  return (
    <h2
      ref={headingRef}
      className="text-[10rem] ml-7 font-[500] flex select-none overflow-hidden font-two tracking-tighter underline decoration-[#ffca3a] decoration-8 underline-offset-[1.3rem]"
    >
      {text.split("").map((char, i) => (
        <span key={i} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h2>
  );
};

export default AnimatedText;
