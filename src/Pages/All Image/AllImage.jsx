import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import useAxiosSecure from "../../customHooks/useAxiosSecure";
import { HashLoader } from "react-spinners";
import Swal from "sweetalert2";
const AllImage = () => {
  const [axiosSecure] = useAxiosSecure();
  const [copiedUrl, setCopiedUrl] = useState('');

  const {
    data: images = [],
    refetch,
    isLoading,
  } = useQuery(["images"], async () => {
    const res = await axiosSecure.get(`/uploade_images`);
    return res.data;
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <HashLoader color="#A6ADBA" />
      </div>
    );
  }

  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url)
      .then(() => {
        setCopiedUrl(url);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Copy Image url successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error('Failed to copy URL to clipboard:', error);
      });
  };

  return (
    <div className="container mx-auto py-14 grid lg:grid-cols-3 gap-9">
      {images ? (
        images.map((img) => (
          <div className="card w-96 bg-base-100 shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]">
            <figure>
              <img
                src={img.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body flex-grow-0 py-5">
              <h2 className="card-title">Image URL</h2>
              <p className="p-4 bg-base-300 text-white rounded-xl">{img.image}</p>
              <div className=" pt-4">
                <button className="btn btn-primary w-full " onClick={() => copyToClipboard(img.image)}>Copy URL</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No image found.</p>
      )}
    </div>
  );
};

export default AllImage;
