import React from "react";
import { BeakerIcon, CloudArrowDownIcon } from "@heroicons/react/24/solid";

const UploadImage = () => {
  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    console.log(files);
  };

//  DataTransfer
// The DataTransfer object is used to hold the data 
// that is being dragged during a drag and drop operation.
//  It may hold one or more data items, each of one or more data types.

  return (
    <div className="container mx-auto py-9 flex justify-center items-center lg:h-screen ">
      <div className="card  bg-base-100 shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]">
        <div className="card-body">
          <h2 className="text-3xl font-Poppins font-bold px-10 lg:px-32 pt-9 pb-3 ">
            Upload your image
          </h2>
          <p className="text-center text-gray-300 font-thin text-lg pb-4">
            File should be Jpg,Jpeg, Png,...
          </p>

          <div
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={fileDrop}
            className="border-2 border-dashed rounded-lg "
          >
            <div className="px-40 lg:px-52 py-4 lg:py-9">
              <CloudArrowDownIcon className="w-16 lg:w-36 h-16 lg:h-32"></CloudArrowDownIcon>
            </div>
            <p className="text-center text-gray-300 font-thin text-lg pb-32 lg:pb-40">
              Drag & Drop your image here
            </p>
          </div>
          <p className="text-center text-gray-300 font-thin text-lg py-4">Or</p>
          <div className="card-actions justify-center">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer  text-white py-2 px-24 rounded btn btn-primary text-xl font-Poppins font-semibold"
            >
              <span className="absolute">Choose a file</span>
              <input
                id="file-upload"
                type="file"
                className="opacity-0 absolute "
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
