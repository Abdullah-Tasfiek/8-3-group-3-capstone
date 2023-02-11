import "../Styles/Home.css";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !animated) {
        setAnimated(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animated]);

  return (
    <div className={`text ${animated ? "animated" : ""}`}>
      <div className="text-center text-7xl font-bold font-fonts grid content-center my-18">
        <h2 className="text-white drop-shadow-2xl">Eating is a lifestyle </h2>
        <br></br>
        <h2 className="text-white drop-shadow-2xl">
          Find a partner based on your diet
        </h2>
      </div>
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="h-96">Hello</div>
    </div>
  );
}
