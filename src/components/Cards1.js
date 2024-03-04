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
    <div className="px-4 sm:px-6 lg:px-8">
    <div className="container flex flex-wrap justify-center items-center gap-5">
  
      {cardData.map((card) => (
        <div
          key={card.id}
          className="w-full sm:w-auto md:w-1/2 lg:w-1/3 xl:w-1/4 max-w-xs rounded border-1 border-custom-grey-dark bg-primary-color overflow-hidden shadow-xl"
        >
          <img className="w-full" src={card.image} alt="" />
          <div className="px-6 py-4">
            <div className="titleFont text-custom-black mb-2">{card.title}</div>
            <p className="bodyFont text-sm text-custom-grey">
              {card.description}
            </p>
          </div>
          <Button
            key={card}
            className="bg-custom-brown  text-primary-color shadow-slate-400 shadow-md hover:scale-105 duration-300 text-sm p-2 mx-5 mb-5"
            label={card.tags}
          />
        </div>
        
      ))}
      </div>
    </div>
  
  );
}
