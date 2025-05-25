import React from "react";
import vdo1 from "../gallery/art-vdo1.mp4";
import vdo2 from "../gallery/art-vdo2.mp4";
import vdo3 from "../gallery/art-vdo3.mp4";
import art1 from "../gallery/art1.jpg";
import art2 from "../gallery/art2.jpg";
import art3 from "../gallery/art3.jpg";
import art4 from "../gallery/art4.jpg";
import art5 from "../gallery/art5.jpg";
import art6 from "../gallery/art6.jpg";
import art7 from "../gallery/art7.jpg";
import art8 from "../gallery/art8.jpg";
import art9 from "../gallery/art9.jpg";
import art10 from "../gallery/art10.jpg";
import art11 from "../gallery/art11.jpg";
import art12 from "../gallery/art12.jpg";
import art13 from "../gallery/art13.jpg";
import art14 from "../gallery/art14.jpg";
import art15 from "../gallery/art15.jpg";
import art16 from "../gallery/art16.jpg";
import art17 from "../gallery/art17.jpg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Page5 = () => {
  const galleryRef = useRef(null);
  useGSAP(() => {
    gsap.from(galleryRef.current, {
      opacity: 0,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: galleryRef.current,
      },
    });
  })

  const handleEnter = (e) => {
    gsap.to(e.currentTarget, {
      boxShadow: "0 0 10px #000",
      backgroundColor: "#8ac926",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = (e) => {
    gsap.to(e.currentTarget, {
      boxShadow: "0 0 0 transparent",
      backgroundColor: "transparent",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const ImageBlock = ({ children }) => (
    <div
      className="images"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );

  return (
    <>
      <div ref={galleryRef} className="page5 w-full h-[200vh] flex justify-center items-center flex-row gap-3 ">
        <div className="gallery-grid">
          <ImageBlock>
            <img src={art1} alt="" />
          </ImageBlock>
          <ImageBlock>
            <video autoPlay loop muted playsInline>
              <source src={vdo3} type="video/mp4" />
            </video>
          </ImageBlock>
          <ImageBlock>
            <img src={art2} alt="" />
          </ImageBlock>
          <ImageBlock>
            <img src={art3} alt="" />
          </ImageBlock>
        </div>

        <div className="gallery-grid translate-y-[90px]">
          <ImageBlock>
            <img src={art4} alt="" />
          </ImageBlock>
          <ImageBlock>
            <img src={art5} alt="" />
          </ImageBlock>
          <ImageBlock>
            <img src={art12} alt="" />
          </ImageBlock>
          <ImageBlock>
            <img src={art7} alt="" />
          </ImageBlock>
        </div>

        <div className="gallery-grid -translate-y-[50px]">
          <ImageBlock>
            <img src={art8} alt="" />
          </ImageBlock>
          <ImageBlock>
            <img src={art9} alt="" />
          </ImageBlock>
          <ImageBlock>
            <video autoPlay loop muted playsInline>
              <source src={vdo1} type="video/mp4" />
            </video>
          </ImageBlock>
          <ImageBlock>
            <img src={art10} alt="" />
          </ImageBlock>
        </div>

        <div className="gallery-grid translate-y-[50px]">
          <ImageBlock>
            <img src={art11} alt="" />
          </ImageBlock>
          <ImageBlock>
            <img src={art6} alt="" />
          </ImageBlock>
          <ImageBlock>
            <img src={art13} alt="" />
          </ImageBlock>
          <ImageBlock>
            <img src={art14} alt="" />
          </ImageBlock>
        </div>

        <div className="gallery-grid">
          <ImageBlock>
            <img src={art15} alt="" />
          </ImageBlock>
          <ImageBlock>
            <img src={art16} alt="" />
          </ImageBlock>
          <ImageBlock>
            <img src={art17} alt="" />
          </ImageBlock>
          <ImageBlock>
            <video autoPlay loop muted playsInline>
              <source src={vdo2} type="video/mp4" />
            </video>
          </ImageBlock>
        </div>
      </div>
    </>
  );
};

export default Page5;
