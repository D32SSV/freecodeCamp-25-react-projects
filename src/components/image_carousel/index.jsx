import React, { useEffect, useState } from "react";
import Loader from "../loader";
import axios from "axios";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function ImageCarousel({ url, limit = 10, page = 1 }) {
  const [photoData, setPhotoData] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  async function fetchImages(currentURL) {
    try {
      setIsLoading(true);
      const response = await axios(`${currentURL}?page=${page}&limit=${limit}`);
      // console.log(response);
      if (response) {
        setPhotoData(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setErr(error.message);
      setIsLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentImage(
      currentImage === 0 ? photoData.length - 1 : currentImage - 1
    );
  }

  function handleNext() {
    setCurrentImage(
      currentImage === photoData.length - 1 ? 0 : currentImage + 1
    );
  }

  useEffect(() => {
    if (url) {
      fetchImages(url);
    }
  }, [url]);

  //   console.log(photoData);
  if (isLoading) {
    return <Loader />;
  }
  if (err !== null) {
    return <p>Data fetch did not go through!! : {err}</p>;
  }

  return (
    <div className="flex items-center justify-center relative w-11/12 h-screen">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="absolute text-yellow-500 w-10 h-10 drop-shadow-lg	left-8"
      />
      {photoData.map((ph, index) => (
        <img
          key={index}
          src={ph.download_url}
          className={`rounded-lg shadow-lg  w-4/12 h-4/12 ${currentImage===index ? "block":"hidden"}`}
        />
      ))}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="absolute text-yellow-500 w-10 h-10 drop-shadow-lg -right-24"
      />
      <span className="absolute flex bottom-32">
        {photoData.map((_, id) => (
          <button
            onClick={() => setCurrentImage(id)}
            key={id}
            className={`rounded-full cursor-pointer outline-none border-none m-1 ${
              currentImage === id ? "bg-red-400" : "bg-black"
            }`}
          ></button>
        ))}
      </span>
    </div>
  );
}

export default ImageCarousel;
// style={{padding:"1rem",height:"20rem", width:"20rem" }}
