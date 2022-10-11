import React from "react";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

const Topic = ({ topic }) => {
  const { id, logo, name, total } = topic;

  const handleStart = () => {
    toast.info(`Starting ${name} Quiz`);
  };
  return (
    <div>
      <div className="rounded-md shadow-md sm:w-96 md:w-80  bg-gray-900 text-gray-100 my-4">
        <div className="flex items-center justify-between p-3 bg-slate-500 rounded-t-lg mb-4">
          <div className="flex items-center space-x-2">
            <h2 className="text-xl">{name}</h2>
          </div>
          <button title="Open options" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current"
            >
              <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
              <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
              <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
            </svg>
          </button>
        </div>
        <div className="cart-image flex justify-center">
          <img
            src={logo}
            alt=""
            className="object-cover mb-4 h-52 dark:bg-gray-500"
          />
        </div>
        <div className="p-3 bg-slate-400 rounded-b-lg">
          <div className="space-y-3">
            <p className="text-sm">
              <span className="text-base font-semibold"> Quizes : {total}</span>
            </p>
          </div>
          <div className="starbtn my-5">
            <Link
              to={`/topics/${id}`}
              onClick={handleStart}
              className="bg-blue-900 px-5 py-2 rounded-md  font-semibold hover:bg-blue-700 ease-linear duration-500"
            >
              Start Quizes <FontAwesomeIcon icon={faArrowCircleRight} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
