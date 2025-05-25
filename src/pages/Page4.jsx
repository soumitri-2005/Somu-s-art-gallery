import React, { useEffect, useRef } from "react";
import img1 from "../images/drawing-one.jpg";
import img2 from "../images/drawing-two.jpg";
import img3 from "../images/drawing-three.jpg";
import img4 from "../images/drawing-four.jpg";
import img5 from "../images/drawing-five.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page4 = () => {
  const wrapperRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top top",
      end: "+=900vh",
      scrub: 1,
      pin: true,
      onUpdate: (self) => {
        gsap.to(wrapperRef.current, {
          x: `${-500 * self.progress}vw`,
          duration: 1,
          ease: "power3.out",
        });
      },
    });

    const cards = [
      { ref: cardRefs.current[0], endTranslateX: -2000, rotate: 45 },
      { ref: cardRefs.current[1], endTranslateX: -2000, rotate: -30 },
      { ref: cardRefs.current[2], endTranslateX: -2000, rotate: 45 },
      { ref: cardRefs.current[3], endTranslateX: -2000, rotate: -30 },
      { ref: cardRefs.current[4], endTranslateX: -2000, rotate: 45 },
    ];

    cards.forEach((card) => {
      ScrollTrigger.create({
        trigger: card.ref,
        start: "top top",
        end: "+=900vh",
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(card.ref, {
            x: `${card.endTranslateX * self.progress}px`,
            rotate: `${card.rotate * self.progress * 2}`,
            duration: 1,
            ease: "power3.out",
          });
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div className="container w-full h-[220vh] relative overflow-hidden">
      <section
        className="wrapper absolute top-0 w-[400vw] h-[100vh] will-change-transform"
        ref={wrapperRef}
      >
        <h1 className="w-full text-black text-[32vw] text-center font-one space tracking-tight translate-x-[14%]"  style={{ textShadow: '2px 2px 10px #ffca3a' }}>
          A Glimpse Of Heaven's Palette.
        </h1>
        <div
          className="card absolute top-[55%] left-[19%] -z-10 "
          ref={(el) => (cardRefs.current[0] = el)}
        >
          <img src={img1} alt="art-1" />
        </div>
        <div
          className="card absolute top-[7%] left-[50%]"
          ref={(el) => (cardRefs.current[1] = el)}
        >
          <img src={img2} alt="art-2" />
        </div>
        <div
          className="card absolute top-[58%] left-[65%] -z-10"
          ref={(el) => (cardRefs.current[2] = el)}
        >
          <img src={img3} alt="art-3" />
        </div>
        <div
          className="card absolute top-[7%] left-[105%]"
          ref={(el) => (cardRefs.current[3] = el)}
        >
          <img src={img4} alt="art-4" />
        </div>
        <div
          className="card absolute top-[60%] left-[120%] -z-10"
          ref={(el) => (cardRefs.current[4] = el)}
        >
          <img src={img5} alt="art-5" />
        </div>
      </section>
    </div>
  );
};

export default Page4;
