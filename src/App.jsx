import React, { useState } from "react";
import Page1 from "./pages/Page1";
import Header from "./components/Header";
import Cursor from "./components/Cursor";
import Sidebar from "./components/Sidebar";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page8 from "./pages/Page8";
import Page9 from "./pages/Page9";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Cursor />
      <Header toggleSidebar={() => setIsOpen(!isOpen)} />
      <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(false)} />

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
        ></div>
      )}

      <div id="home"><Page1 /></div>
      <Page2 />
      <div id="about"><Page3 /></div>
      <Page4 />
      <Page5 />
      <div className="w-full h-[200px]"></div>
      <Page6 />
      <div id="sketchbook"><Page7 /></div>
      <div id="contact"><Page8 /></div>
      <Page9 />
    </>
  );
};

export default App;
