import React, { useEffect, useState } from "react";
import "./Hero.style.css";
import img1 from "../../assets/pictures/üst2.png";
import img2 from "../../assets/pictures/orta2.png";
import img3 from "../../assets/pictures/alt.png";
const Hero = () => {
  useEffect(() => {
    let text = document.getElementById("text");
    let top = document.getElementById("desert1");
    let middle = document.getElementById("desert2");
    let bottom = document.getElementById("desert3");

    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      text.style.marginTop = value * 2.5 + "px";
      top.style.marginTop = value * 0.5 + "px";
      middle.style.marginTop = value * 0.4 + "px";

      text.style.marginRight = value * -0.5 + "px";

      //   bottom.style.marginBottom = value * 1.3 + "px";

      console.log(value);
    });
  }, []);

  return (
    <div className="top-div ">
      <div className="parallax ">
        <img alt="üst" src={img1} id="desert1" className="parallax-images" />
        <img alt="orta" src={img2} id="desert2" className="parallax-images" />
        <h1 id="text" className="text">
          Text
        </h1>
        <img alt="alt" src={img3} id="desert3" className="parallax-images" />
        <hr />
      </div>
      <section className="w-[80%] h-[100vh] flex flex-col justify-start bg-[#f8931f] mx-auto relative top-0 left-0">
        <h2 className="flex justify-center mx-auto text-5xl text-white mb-3">
          Title
        </h2>
        <p className="text-black">
          Aliquip adipisicing minim minim ipsum enim aliquip sunt fugiat ad
          aliqua quis consequat. Culpa aliqua deserunt culpa culpa excepteur
          nostrud. Ut ea dolore officia nostrud proident velit reprehenderit.
          Aliquip adipisicing minim minim ipsum enim aliquip sunt fugiat ad
          aliqua quis consequat. Culpa aliqua deserunt culpa culpa excepteur
          nostrud. Ut ea dolore officia nostrud proident velit reprehenderit.
          Aliquip adipisicing minim minim ipsum enim aliquip sunt fugiat ad
          aliqua quis consequat. Culpa aliqua deserunt culpa culpa excepteur
          nostrud. Ut ea dolore officia nostrud proident velit reprehenderit.
        </p>
      </section>
    </div>
  );
};

export default Hero;
