import React, { useState } from "react";
import Page1 from "./pages/Page1";
import Header from "./components/Header";
import Cursor from "./components/Cursor";
import Sidebar from "./components/Sidebar";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";

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

      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
    </>
  );
};

export default App;
