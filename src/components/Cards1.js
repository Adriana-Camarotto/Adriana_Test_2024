import React from "react"; // Ensure React is properly imported
import Image1 from "../Assets/Rectangle6.png";
import Image2 from "../Assets/Rectangle8.png";
import Image3 from "../Assets/Rectangle10.png";
import Button from "../components/Button";

const cardData = [
  {
    id: 1,
    image: Image1,
    title: "PROMOTE YOUR ARTWORK",
    description:
      "Suspendisse at lorem id velit condimentum sagittis. Praesent ac feugiat nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti. Duis tincidunt ornare dignissim. Duis mi risus, tincidunt varius condimentum in.",
    tags: "Artist Submissions",
  },
  {
    id: 2,
    image: Image2,
    title: "SELL OUR PORTFOLIO",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti. Duis tincidunt ornare dignissim. Duis mi risus, tincidunt varius condimentum in. Suspendisse at lorem id velit condimentum sagittis. Praesent ac feugiat nisi.",
    tags: "Trade Enquiries",
  },
  {
    id: 3,
    image: Image3,
    title: "BUY HIGH QUALITY ARTWORKS",
    description:
      "Duis tincidunt ornare dignissim. Duis mi risus, tincidunt varius condimentum in. Suspendisse at lorem id velit condimentum sagittis. Praesent ac feugiat nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti.",
    tags: "Where to Buy",
  },
];

export default function Cards1() {
  return (
    <div className="w-full container mx-auto flex justify-center">
      <div className="flex flex-1 flex-grow flex-col md:flex-col lg:flex-row justify-center items-center lg:space-x-[43px]">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="w-[536px] h-[616px] rounded border border-1 border-custom-grey-dark bg-primary-color overflow-hidden shadow-md   sm:mb-[34px] lg:mb-[121px]"
          >
            <img
              className="w-full h-[236px] mb-[40px]"
              src={card.image}
              alt=""
            />
            <div className="">
              <div className="titleFont text-[27px] text-custom-black ml-[32px] mb-[26px]">
                {card.title}
              </div>
              <p className="h-[146px] w-[470px] bodyFont text-[21px] text-custom-grey ml-[32px] mr-[33px] mb-[31px]">
                {card.description}
              </p>
            </div>
            <Button
              key={card}
              className="bg-custom-brown  text-primary-color shadow-slate-400 shadow-md hover:scale-105 duration-300 p-2 ml-[32px] mt-[31px] mb-[30px]"
              label={card.tags}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
