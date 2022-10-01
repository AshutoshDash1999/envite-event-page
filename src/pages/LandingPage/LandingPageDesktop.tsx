import React from "react";
import { Link } from "react-router-dom";
import LandingPageImage from "../../assets/landing_page_image.svg";

function LandingPageDesktop() {
  return (
    <div className="bg-[#F6F2FF] h-screen flex justify-evenly items-center">
      <div>
        <img
          className="h-[292px] md:h-[548.27px] drop-shadow-xl"
          src={LandingPageImage}
          alt="LandingPageImage"
        />
      </div>
      <div>
        <div className="mb-12">
          <h1 className="text-right text-3xl md:text-6xl font-bold	text-[#240D57]">
            Imagine if
          </h1>
          <h1 className="text-right text-3xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8]">
            Snapchat
          </h1>
          <h1 className="text-right text-3xl md:text-6xl font-bold	text-[#240D57]  mb-4">
            had events.
          </h1>
          <p className="font-light text-right text-xs md:text-2xl">
            Easily host and share events with your friends across any social
            media.
          </p>
        </div>
        <div className="flex justify-end">
          <Link to="createEvent">
            <button className="py-4 px-5 md:px-16 rounded-[10px] text-center font-bold text-white bg-gradient-to-r from-[#8456EC] to-[#E87BF8]">
              🎉 Create my event
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPageDesktop;
