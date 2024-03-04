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
    <div className="container flex justify-center px-4 sm:px-6 lg:px-8 mt-96">
      <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center mx-7 gap-5">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="flex flex-col lg:flex-row w-full rounded border-l border-custom-grey-dark overflow-hidden shadow-xl shadow-grey-400 mb-4 sm:mb-0"
          >
            <div>
              <img
                className="h-full min-w-full object-cover"
                src={card.image}
                alt=""
              />
            </div>
            <div className="w-full bg-primary-color px-6 py-4">
              <div className="titleFont text-custom-black mb-2">
                {card.title}
              </div>
              <p className="bodyFont text-sm text-custom-grey">
                {card.description}
              </p>
              <Button
                key={card}
                className="bg-custom-brown text-primary-color shadow-slate-400 shadow-md hover:scale-105 duration-300 text-sm p-2 my-2"
                label={card.tags}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
