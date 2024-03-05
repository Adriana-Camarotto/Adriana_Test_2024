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
    <span className="relative inline-block xs:text-[35px] sm:text-[35px] lg:text-[40px] xl:text-[40px] text-custom-brown">
      {year1}
    </span>
  );

  const year2 = "983";
  const numbers = year2.split("").map((number, index) => {
    const positionClass = index % 2 === 0 ? "top-1" : "bottom-1";
    return (
      <span
        key={index}
        className={`relative ${positionClass} xs:text-[35px] sm:text-[35px] lg:text-[40px] xl:text-[40px] text-custom-brown`}
      >
        {number}
      </span>
    );
  });

  return (
    <div
      className="Section w-[100vw] h-[100vh] items-center gap-[60px] inline-flex relative z-0"
      style={backgroundStyle}
    >
      <div className="absolute inset-0 bg-black/50 ">
        <section className="mx-auto flex flex-col items-center justify-center">
          <img
            className="flex flex-1 mt-[216px] "
            src={image1}
            alt="logo"
          />
          <h1 className="titleFont px-6 text-primary-color xs:text-[35px] sm:text-[35px] lg:text-[40px] xl:text-[40px] z-10 mt-[59px] mb-[38px]">
            INVESTING IN INNOVATIVE ARTISTS
            <span className="text-custom-brown sm:flex-auto">
              {" "}
              SINCE {number}
              {numbers}
            </span>
          </h1>
          <div className="Container flex flex-1 px-6 ">
            <p className="relative xl:leading-[30px] text-center flex flex-1 xl:max-w-[764px] h-[112px] bodyFont text-primary-color xs:text-[14px] sm:text-[16px] lg:text-[22px] xl:text-[22px] mb-[52px] z-10">
              Suspendisse at lorem id velit condimentum sagittis. Praesent ac
              feugiat nisi. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Suspendisse potenti. Duis
              tincidunt ornare dignissim. Duis mi risus, tincidunt varius
              condimentum in.
            </p>
          </div>
          <button className="w-[120px] h-[55px] bodyFont text-primary-color border-2 border-solid p-2 hover:scale-105 duration-300 shadow-black/70 shadow-lg leading-none">
            About us
          </button>
        </section>
      </div>
    </div>
  );
}

export default Hero;
