import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import art18 from "../gallery/art18.jpg";
import art19 from "../gallery/art19.jpg";
import art20 from "../gallery/art20.jpg";
import art21 from "../gallery/art21.jpg";
import art22 from "../gallery/art22.jpg";
import art23 from "../gallery/art23.jpg";
import art24 from "../gallery/art24.jpg";
import art25 from "../gallery/art25.jpg";
import art26 from "../gallery/art26.jpg";
import art27 from "../gallery/art27.jpg";
import art28 from "../gallery/art28.jpg";
import art29 from "../gallery/art29.jpg";
import art30 from "../gallery/art30.jpg";
import art31 from "../gallery/art31.jpg";
import star from "../images/star1.png";
import bow from "../images/bow2.png";

const Sketchbook = () => {

  const [page, setPage] = useState(0);
  const total = 9;

  const pg1 = useRef();
  const pg2 = useRef();
  const pg3 = useRef();
  const pg4 = useRef();
  const pg5 = useRef();
  const pg6 = useRef();
  const pg7 = useRef();
  const pg8 = useRef();
  const pg9 = useRef();
  const refs = [pg1, pg2, pg3, pg4, pg5, pg6, pg7, pg8, pg9];

  const flipForward = () => {
    if (page >= total) return;
    const cur = refs[page].current;
    cur.style.zIndex = total + 1;
    gsap.to(cur, {
      rotationY: -180,
      duration: 0.6,
      transformOrigin: "left center",
      ease: "power2.inOut",
      onComplete: () => {
        cur.style.zIndex = page - total;
      },
    });
    setPage((p) => p + 1);
  };

  const flipBackward = () => {
    if (page <= 0) return;
    const prev = refs[page - 1].current;
    prev.style.zIndex = total + 1;
    gsap.to(prev, {
      rotationY: 0,
      duration: 0.6,
      transformOrigin: "left center",
      ease: "power2.inOut",
      onComplete: () => {
        prev.style.zIndex = total - (page - 1);
      },
    });
    setPage((p) => p - 1);
  };

  return (
    <>
      <div
        className="flex justify-center items-center overflow-hidden"
        style={{ height: "100vh", width: "100vw" }}
      >
        <div className="relative page7 w-full h-full">
          <button
            onClick={flipBackward}
            className="absolute text-4xl z-20 left-[8rem] top-[21rem]"
          >
            <ArrowLeftIcon
              style={{
                color: "#ff595e",
                fontSize: "2.5rem",
                marginRight: "10px",
                backgroundColor: "#8ac926",
                borderRadius: "50%",
              }}
            />
          </button>

          <div
            className="relative translate-x-[47.5rem] translate-y-[2rem]"
            style={{ width: 550, height: 650, perspective: 2000 }}
          >
            {/* Page 1 */}
            <div ref={pg1} className="page-wrapper" style={{ zIndex: 9 }}>
              <div className="page-side page-border-left bg-[#401d0c]">
                <img
                  src={star}
                  className="h-[100px] w-auto translate-x-[13rem] translate-y-[16.5rem]"
                  alt=""
                />
                <div className="h-full w-[30px] bg-yellow-600 translate-x-[26.5rem] -translate-y-[6.25rem]"></div>
              </div>
              <div
                className="page-side page-border-right bg-[#401d0c]"
                style={{ transform: "rotateY(180deg)" }}
              ></div>
            </div>

            {/* Page 2 */}
            <div ref={pg2} className="page-wrapper" style={{ zIndex: 8 }}>
              <div
                className="page-side page-border-left bg-cover bg-center"
                style={{ backgroundImage: `url(${art18})` }}
              ></div>
              <div
                className="page-side page-border-right bg-cover bg-center"
                style={{
                  transform: "rotateY(180deg)",
                  backgroundImage: `url(${art31})`,
                }}
              ></div>
            </div>

            {/* Page 3 */}
            <div ref={pg3} className="page-wrapper" style={{ zIndex: 7 }}>
              <div
                className="page-side page-border-left bg-cover bg-center"
                style={{ backgroundImage: `url(${art29})` }}
              ></div>
              <div
                className="page-side page-border-right bg-cover bg-center"
                style={{
                  transform: "rotateY(180deg)",
                  backgroundImage: `url(${art21})`,
                }}
              ></div>
            </div>

            {/* Page 4 */}
            <div ref={pg4} className="page-wrapper" style={{ zIndex: 6 }}>
              <div
                className="page-side page-border-left bg-cover bg-center"
                style={{ backgroundImage: `url(${art22})` }}
              ></div>
              <div
                className="page-side page-border-right bg-cover bg-center"
                style={{
                  transform: "rotateY(180deg)",
                  backgroundImage: `url(${art23})`,
                }}
              ></div>
            </div>

            {/* Page 5 */}
            <div ref={pg5} className="page-wrapper" style={{ zIndex: 5 }}>
              <div
                className="page-side page-border-left bg-cover bg-center"
                style={{ backgroundImage: `url(${art20})` }}
              ></div>
              <div
                className="page-side page-border-right bg-cover bg-center"
                style={{
                  transform: "rotateY(180deg)",
                  backgroundImage: `url(${art24})`,
                }}
              ></div>
            </div>

            {/* Page 6 */}
            <div ref={pg6} className="page-wrapper" style={{ zIndex: 4 }}>
              <div
                className="page-side page-border-left bg-cover bg-center"
                style={{ backgroundImage: `url(${art25})` }}
              ></div>
              <div
                className="page-side page-border-right bg-cover bg-center"
                style={{
                  transform: "rotateY(180deg)",
                  backgroundImage: `url(${art26})`,
                }}
              ></div>
            </div>

            {/* Page 7 */}
            <div ref={pg7} className="page-wrapper" style={{ zIndex: 3 }}>
              <div
                className="page-side page-border-left bg-cover bg-center"
                style={{ backgroundImage: `url(${art27})` }}
              ></div>
              <div
                className="page-side page-border-right bg-cover bg-center"
                style={{
                  transform: "rotateY(180deg)",
                  backgroundImage: `url(${art28})`,
                }}
              ></div>
            </div>

            {/* Page 8 */}
            <div ref={pg8} className="page-wrapper" style={{ zIndex: 2 }}>
              <div
                className="page-side page-border-left bg-cover bg-center"
                style={{ backgroundImage: `url(${art30})` }}
              ></div>
              <div
                className="page-side page-border-right bg-cover bg-center"
                style={{
                  transform: "rotateY(180deg)",
                  backgroundImage: `url(${art19})`,
                }}
              ></div>
            </div>

            {/* Page 9 */}
            <div ref={pg9} className="page-wrapper" style={{ zIndex: 1 }}>
              <div className="page-side page-border-left bg-[#401d0c]"></div>
              <div
                className="page-side page-border-right bg-[#401d0c]"
                style={{ transform: "rotateY(180deg)" }}
              >
                <img
                  src={bow}
                  className="h-[100px] w-auto translate-x-[13rem] translate-y-[16.5rem]"
                  alt=""
                />
              </div>
            </div>
          </div>

          <button
            onClick={flipForward}
            className="absolute text-gray-700 hover:text-gray-900 text-4xl z-20 right-[9rem] bottom-[22rem]"
          >
            <ArrowRightIcon
              style={{
                color: "#ff595e",
                fontSize: "2.5rem",
                marginleft: "10px",
                backgroundColor: "#8ac926",
                borderRadius: "50%",
              }}
            />{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sketchbook;
