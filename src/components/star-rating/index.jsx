import React from "react";
import { FaStar } from "react-icons/fa";

function Star({ starCount = 8 }) {
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(0);

  function handleClick(currentId) {
    // console.log(currentId);
    // if(currentId===1)
    setRating(currentId);
  }
  function handleEnter(currentId) {
    // console.log(currentId);
    setHover(currentId);
  }
  function handleLeave(currentId) {
    // console.log(currentId);
    setHover(rating);
  }
  return (
    <div className="w-screen h-40 flex justify-center items-center">
      {[...Array(starCount)].map((_, id) => {
        id += 1;
        return (
          <FaStar
            size={40}
            key={id}
            onClick={() => handleClick(id)}
            onMouseEnter={() => handleEnter(id)}
            onMouseLeave={() => handleLeave(id)}
            className={`${
              id <= (hover || rating) ? "text-yellow-500" : "text-black"
            }`}
          />
        );
      })}
    </div>
  );
}

export default Star;
