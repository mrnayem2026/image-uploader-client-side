import React, { useState } from "react";
import { BeakerIcon, CloudArrowDownIcon } from "@heroicons/react/24/solid";
import useAxiosSecure from "../../customHooks/useAxiosSecure";
import { GridLoader } from 'react-spinners';
import Swal from "sweetalert2";

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading,setLoading] = useState(false)

  const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const [axiosSecure] = useAxiosSecure();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      console.log("No file selected.");
      return;
    }

    setLoading(true)


    const formData = new FormData();
    formData.append("image", selectedFile);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {

        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const newImage = {
            image: imgURL,
          };
          console.log(newImage);
          axiosSecure.post("/uploade_image", newImage).then((data) => {
            if (data.data.data.insertedId) {
              setLoading(false)
              console.log("HEllo Nayem form SWAl");
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "New Image added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
      
  };

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
            <form
              action="/upload"
              method="post"
              encType="multipart/form-data"
              htmlFor="file-upload"
              className="relative cursor-pointer  text-white py-2 px-24 rounded btn btn-primary text-xl font-Poppins font-semibold"
            >
              <span className="absolute">Choose a file</span>
              <input
                id="file-upload"
                name="image"
                type="file"
                className="opacity-0 absolute "
                onChange={handleFileChange}
              />
            </form>
          </div>
          <div className="flex justify-center py-4">
          <button onClick={handleUpload} disabled={loading ? <GridLoader></GridLoader> :  loading} className="btn btn-outline py-2 px-24 text-xl font-Poppins font-semibold w-2/5">Upload</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadImage;

// write a code that pass a img file in server using expressJS and Multer Midlewere
