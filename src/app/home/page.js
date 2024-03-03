import React from "react";
import Hero from "../../components/Hero";
import Cards1 from "../../components/Cards1";
import Button from "../../components/Button";
import image15 from "../../Assets/Rectangle15.png";
import image16 from "../../Assets/Rectangle16.png";
import image17 from "../../Assets/Rectangle17.png";
import image18 from "../../Assets/Rectangle18.png";
import image19 from "../../Assets/Rectangle19.png";
import image20 from "../../Assets/Rectangle20.png";

function Home() {
  const images = [image15, image16, image18, image17, image20, image19];
  
  return (
<div className="min-w-full container mx-auto bg-custom-light-grey">

      <Hero />

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="titleFont flex flex-grow justify-center items-center text-custom-brown xs:text-xs sm:text-xl lg:text-3xl tracking-wide mt-[52px] h-[50px] px-6 my-[61px]">
          <h1>DUIS TINCIDUNT ORNARE DIGNISSIM</h1>
        </div>
        <div className="container mx-auto mb-20 ">
          <Cards1 />
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="titleFont text-center text-custom-black-title text-xl lg:text-3xl tracking-wide mt-8 mb-6">
          <h1>ARTIST SHOWCASE</h1>
        </div>

        <div className="container mx-auto text-center mb-8 max-w-lg">
            <p className="text-custom-grey bodyFont text-sm lg:text-base leading-2">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Suspendisse potenti. Duis
              tincidunt ornare dignissim.
            </p>
          </div>

        
         <div className="container mx-auto flex flex-wrap justify-center items-center mb-8">
        {images.map((imagem, index) => (
          <img src={imagem} alt={`Imagem ${index + 1}`} key={index} className="max-w-[200px] hover:scale-105 duration-300" />
        ))}
      </div>
      
      <div className="flex justify-center">
        <Button
          label="Browse Our Artists"
          color="custom-brown"
          textColor="primary-color"
          className="bg-custom-brown  text-primary-color shadow-slate-400 shadow-md hover:scale-105 duration-300 text-sm p-2 mx-5 mb-24" />
      </div>        
      </section>
 </div>
  );
}

export default Home;
