import React from "react";
import Hero from "../../components/Hero";
import Cards1 from "../../components/Cards1";

function Home() {
  return (
  <div className="container bg-custom-light-grey absolute inset-0">
      <Hero />
      <section>
        <div className="titleFont flex flex-grow justify-center items-center text-custom-brown xs:text-xs sm:text-xl lg:text-3xl tracking-wide mt-[52px] h-[50px] px-6">
          <h1>DUIS TINCIDUNT ORNARE DIGNISSIM</h1>
        </div>
        <div className="container">
          <Cards1 />
        </div>
      </section>
      
    </div>
    
  );
}

export default Home;
