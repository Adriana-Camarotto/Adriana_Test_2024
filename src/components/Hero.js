import React from "react";
import mask1 from "../Assets/MaskGroup1.png";
import image1 from "../Assets/Image1.png";

function Hero() {
  const backgroundStyle = {
    backgroundImage: `url(${mask1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const year1 = "1";
  const number = (
    <span className="relative inline-block text-xl text-custom-brown tracking-wide">
      {year1}
    </span>
  );

  const year2 = "983";
  const numbers = year2.split("").map((number, index) => {
    const positionClass = index % 2 === 0 ? "top-0.5" : "bottom-0.5";
    return (
      <span
        key={index}
        className={`relative ${positionClass} text-2xl text-custom-brown tracking-wide`}
      >
        {number}
      </span>
    );
  });

  return (
    <div
      className="Section w-[100vw] h-[100vh] px-[170px] py-[60px] items-center gap-[60px] inline-flex relative z-0"
      style={backgroundStyle}
    >
      <div className="absolute inset-0 bg-black/50">
        <section className="container mx-auto flex flex-col items-center justify-center">
        <img className="flex flex-1 size-1/4  h-auto mt-[110px]" src={image1} alt="logo" />
          <h1 className="titleFont px-6 text-primary-color tracking-wider xs:text-xs sm:text-xl lg:text-2xl z-10 mt-[38px] mb-[22px]">
            INVESTING IN INNOVATIVE ARTISTS
            <span className="text-custom-brown sm:flex-auto">
              {" "}
              SINCE {number}
                    {numbers}
            </span>
          </h1>
          <div className="Container flex flex-1 px-6 ">
            <p className="text-center flex flex-1 leading-1 lg:max-w-[515px]  bodyFont  text-primary-color xs:text-xs sm:text-sm lg:text-[13px] tracking-wider relative z-10">
              Suspendisse at lorem id velit condimentum sagittis. Praesent ac
              feugiat nisi. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Suspendisse potenti. Duis
              tincidunt ornare dignissim. Duis mi risus, tincidunt varius
              condimentum in.
            </p>
          </div>
          <button className="bodyFont text-primary-color border-2 border-solid p-2 mt-[34px] leading-none">About us</button>
        </section>
      </div>
    </div>
  );
}

export default Hero;
