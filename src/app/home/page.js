import React from "react";

function Home() {
    const year1 = "1";
    const number = (
      <span className="relative inline-block text-xl text-custom-brown tracking-wider">
        {year1}
      </span>
    );
  
  const year2 = "983";
  const numbers = year2.split("").map((number, index) => {
    const positionClass = index % 2 === 0 ? "top-0.5" : "bottom-0.5";
    return (
      <span key={index} className={`relative ${positionClass} text-2xl text-custom-brown tracking-wider`}>
        {number}
      </span>
    );
  });
  return (
    <section className="home container-fluid relativ">
      <h1 className="titleFont text-2xl">INVESTING IN INNOVATIVE ARTISTS
        <span className="text-custom-brown"> SINCE {number}{numbers}</span>
      </h1>
      <p className="bodyFont font-regular relative z-10">Suspendisse at lorem id velit condimentum sagittis. Praesent ac feugiat nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti. Duis tincidunt ornare dignissim. Duis mi risus, tincidunt varius condimentum in.</p>
    </section>
  );
}

export default Home;
