import React, { useEffect, useState } from "react";
import cursorImg from "../images/cursor.png"; // your image path

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        <img
          src={cursorImg}
          alt="cursor"
          className="w-full h-6"
          style={{ transform: "translate(-50%, -50%)" }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
