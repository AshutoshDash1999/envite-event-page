import React from "react";
import { Link } from "react-router-dom";
import EventImage from "../../assets/event_page_image.png";
import LocationIcon from "../../assets/location.svg";

function CreateEvent() {
  return (
    <div className="h-screen flex justify-evenly items-center bg-[#F6F2FF]">
      <div>
        <h1 className="text-center mb-8 text-2xl md:text-4xl font-bold	text-[#240D57]">
          Create a New Event
        </h1>
        <form action="">
          <div className="form-group mb-2">
            <label
              className="form-label inline-block mb-2 text-gray-700"
              htmlFor="eventNameInput"
            >
              Event Name
            </label>
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#8456EC] focus:outline-none shadow focus:shadow-md"
              id="eventNameInput"
              placeholder="Event Name"
            />
          </div>
          <div className="form-group mb-2">
            <label
              className="form-label inline-block mb-2 text-gray-700"
              htmlFor="eventNameInput"
            >
              Host Name
            </label>
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#8456EC] focus:outline-none shadow focus:shadow-md"
              id="eventNameInput"
              placeholder="Host Name"
            />
          </div>

          <div className="form-group mb-2">
            <label
              className="form-label inline-block mb-2 text-gray-700"
              htmlFor="eventNameInput"
            >
              Location
            </label>
            <div className="form-group mb-2 flex">
              <div className="flex -mr-px">
                <span className="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#737373"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>
              </div>
              <input
                type="text"
                className="flex-shrink flex-grow leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-[#8456EC] focus:outline-none shadow focus:shadow-md"
                placeholder="Location"
              />
            </div>
          </div>

          <div className="mt-8 ">
            <Link to="/event">
              <button className="w-full py-4 px-5 lg:px-16 rounded-[10px] text-center font-bold text-white bg-gradient-to-r from-[#8456EC] to-[#E87BF8] hover:bg-[#8456EC]">
                Next
              </button>
            </Link>
          </div>
        </form>
      </div>
      <div className="hidden lg:inline-block">
        <img className="md:h-[548.27px]" src={EventImage} alt="EventImage" />
      </div>
    </div>
  );
}

export default CreateEvent;
