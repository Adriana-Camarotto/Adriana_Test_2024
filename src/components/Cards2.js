import React from "react"; // Ensure React is properly imported
import Image1 from "../Assets/Rectangle24.png";
import Image2 from "../Assets/Rectangle26.png";
import Button from "./Button";

const cardData = [
  {
    id: 1,
    image: Image1,
    title: "SUSPENDISSE AT LOREM",
    description:
      "Id velit condimentum sagittis. Praesent ac feugiat nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti. Duis tincidunt ornare dignissim. Duis mi risus, tincidunt varius condimentum in.",
    tags: "Read More",
  },
  {
    id: 2,
    image: Image2,
    title: "SUSPENDISSE POTENTI.",
    description:
      "Praesent ac feugiat nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis tincidunt ornare dignissim. Duis mi risus, tincidunt varius condimentum in. Suspendisse at lorem id velit condimentum sagittis.",
    tags: "Read More",
  },
];

export default function Cards2() {
  return (
    <div className="container flex justify-center px-4 sm:px-6 mt-[96px]">
      <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-5">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="flex flex-col lg:flex-row w-full rounded  border border-1 border-custom-grey-dark overflow-hidden shadow-md shadow-grey-950"
          >
            <div className="w-full lg:max-w-[288px]">
              <img
                className="h-full w-full object-cover"
                src={card.image}
                alt=""
              />
            </div>
            <div className="w-full bg-primary-color">
              <div className="titleFont text-[22px] text-custom-black mt-[42px] mr-[35px] ml-[30px] ">
                {card.title}
              </div>
              <p className="bodyFont text-[21px] text-custom-grey mt-[26px] mr-[35px] mb-[25px] ml-[30px]">
                {card.description}
              </p>
              <Button
                key={card}
                className="bg-custom-brown text-primary-color shadow-slate-400 shadow-md hover:scale-105 duration-300 p-3 ml-[30px] mb-[33px]"
                label={card.tags}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
