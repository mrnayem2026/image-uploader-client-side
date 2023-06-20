import React, { useState, useEffect } from "react";
const AllImage = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/image")
      .then((response) => response.json())
      .then((data) => {
        setImageData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      {imageData ? (
        <div>
          <h1>Image Display</h1>
          <img
            src={`data:${imageData.contentType};base64,${imageData.data}`}
            alt="Uploaded"
          />
          <p>Filename: {imageData.filename}</p>
          <p>Size: {imageData.size} bytes</p>
        </div>
      ) : (
        <p>No image found.</p>
      )}
    </div>
  );
};

export default AllImage;
