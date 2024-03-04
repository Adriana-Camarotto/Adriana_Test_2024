import React from "react";
import Hero from "../../components/Hero";
import Cards1 from "../../components/Cards1";
import Cards2 from "../../components/Cards2";
import Button from "../../components/Button";
import image15 from "../../Assets/Rectangle15.png";
import image16 from "../../Assets/Rectangle16.png";
import image17 from "../../Assets/Rectangle17.png";
import image18 from "../../Assets/Rectangle18.png";
import image19 from "../../Assets/Rectangle19.png";
import image20 from "../../Assets/Rectangle20.png";
import image29 from "../../Assets/Rectangle29.png";

function Home() {
  const images = [image15, image16, image18, image17, image20, image19];

  return (
    <div className="min-w-full container mx-auto bg-custom-light-grey ">
      <Hero />

      <section className="bg-custom-grey">
        <div className="titleFont flex flex-grow justify-center items-center text-custom-brown xs:text-xs sm:text-xl lg:text-3xl tracking-wide h-[50px] px-6 mb-[61px] mt-[65px]">
          <h1>DUIS TINCIDUNT ORNARE DIGNISSIM</h1>
        </div>
        <div className="container mx-auto mb-20 ">
          <Cards1 />
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="titleFont text-center text-custom-black-title text-xl lg:text-3xl mt-8 mb-6">
          <h1>ARTIST SHOWCASE</h1>
        </div>

        <div className="container mx-auto max-w-[663px] text-center mb-8">
          <p className="text-custom-grey  bodyFont text-sm lg:text-base leading-2">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Suspendisse potenti. Duis tincidunt ornare
            dignissim.
          </p>
        </div>

        <div className="w-full sm:w-auto wim-w-full container mx-auto flex flex-wrap justify-center items-center mb-8">
          {images.map((imagem, index) => (
            <img
              src={imagem}
              alt={`Imagem ${index + 1}`}
              key={index}
              className="max-w-[248px] max-h-[234px] hover:scale-105 duration-300"
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            label="Browse Our Artists"
            color="custom-brown"
            textColor="primary-color"
            className="bg-custom-brown  text-primary-color shadow-slate-400 shadow-md hover:scale-105 duration-300 text-sm p-2 mx-5 mb-14"
          />
        </div>
      </section>

      <section>
        
          <div className="relative flex flex-wrap justify-center items-center ">
            <img
              src={image29}
              alt="art galery and visitors"
              className="w-full h-full object-cover"
            />

            <div className="absolute w-full h-full bg-black/50">
              <div className="absolute flex flex-grow flex-col justify-center items-left top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center leading-9 z-10">
                <p className="sm:text-sm lg:text-[50px] text-primary-color titleFont mb-[26px] max-w-[1287px] text-left leading-16">
                  Duis tincidunt ornare dignissim. Duis mi risus, tincidunt
                  varius condimentum in. Suspendisse at lorem id velit
                  condimentum sagittis. Praesent ac feugiat nisi.
                </p>
                <p className="sm:text-sm lg:text-[30px] text-custom-brown titleFont text-left">
                  Duis tincidunt ornare dignissim.
                </p>
              </div>
            </div>
          </div>
  
      </section>

    <section className="px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <div className=" mt-0">
              <Cards2 />
              <div className="flex justify-center">
                <Button
                  label="All News & Media"
                  color="custom-brown"
                  textColor="primary-color"
                  className="bg-custom-brown  text-primary-color shadow-slate-400 shadow-md hover:scale-105 duration-300 text-sm p-2 mx-5 mb-14 mt-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  );
}

export default Home;
