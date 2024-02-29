import React from "react"; // Ensure React is properly imported
import Image1 from "../Assets/Rectangle6.png";
import Image2 from "../Assets/Rectangle8.png";
import Image3 from "../Assets/Rectangle10.png";


const cardData = [
    {
      id: 1,
      image: Image1,
      title: "PROMOTE YOUR ARTWORK",
      description: "Suspendisse at lorem id velit condimentum sagittis. Praesent ac feugiat nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti. Duis tincidunt ornare dignissim. Duis mi risus, tincidunt varius condimentum in.",
      tags: "Artist Submissions"
    },
    {
      id: 2,
      image: Image2,
      title: "SELL OUR PORTFOLIO",
      description: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti. Duis tincidunt ornare dignissim. Duis mi risus, tincidunt varius condimentum in. Suspendisse at lorem id velit condimentum sagittis. Praesent ac feugiat nisi.",
      tags: "Trade Enquiries"
    },
    {
        id: 3,
        image: Image3,
        title: "BUY HIGH QUALITY ARTWORKS",
        description: "Duis tincidunt ornare dignissim. Duis mi risus, tincidunt varius condimentum in. Suspendisse at lorem id velit condimentum sagittis. Praesent ac feugiat nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti.",
        tags: "Where to Buy"
      }
  ];


export default function Cards1() {
    return (
        <div className="flex flex-wrap gap-5 justify-center items-center sm:mx-5 mb-20">
        {cardData.map(card => (
            <div key={card.id} className="w-full sm:w-auto md:w-1/2 lg:w-1/3 xl:w-1/2 max-w-xs rounded border-1 border-custom-grey-dark bg-primary-color overflow-hidden shadow-xl mt-4">
            <img className="w-full" src={card.image} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="titleFont text-custom-black mb-2">{card.title}</div>
                <p className="bodyFont text-sm text-custom-grey">{card.description}           
                </p>
            </div>
            <button key={card} className="bg-custom-brown  text-primary-color text-sm p-2 mx-5 mb-5">
                {card.tags}
              </button>
        </div>
        ))}
            
        </div>
        
     );
}
