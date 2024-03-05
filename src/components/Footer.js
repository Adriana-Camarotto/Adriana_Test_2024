import React from "react";
import image2 from "../Assets/Image2.png";

export default function Footer() {
  return (
    <footer className="min-w-full container mx-auto">
      <div className="flex flex-1 justify-center items-center w-full bg-primary-color border border-1 border-custom-medium-grey">
        <div className="px-4 py-11 sm:px-6 lg:px-8">
          <img src={image2} alt="Logo" className="mx-auto mb-10" />
          <p className="flex flex-1 flex-col text-base text-center text-custom-grey">
            &copy; Buckingham Fine Art Publishers Ltd, Unit D, Denbigh West
            Business Park, Third Avenue, Milton Keynes, Bucks. MK1 1DH. England
          </p>
          <div className="flex flex-1 flex-wrap sm:flex-col lg:flex-row justify-center items-center text-base gap-4 mt-4 text-custom-grey mb-2">
            <div>
              <p>Company Number: 01608690</p>
            </div>
            <div>
              <p>Tel:01908 658830</p>
            </div>
            <div>
              <p>
                Email:{" "}
                <a href="mailto:admin@bucksfineart.co.uk" className="underline">
                  admin@bucksfineart.co.uk
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
