import React from "react";
import ReactStars from "react-rating-stars-component";

const Ratings = ({ ratings }) => {
  if (ratings === undefined) {
    return "";
  }
  const ratingChanged = (newRating) => {
    // console.log(newRating);
  };
  return (
    <div>
      <ReactStars
        count={5}
        edit={false}
        value={ratings}
        onChange={ratingChanged}
        size={20}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
      />
    </div>
  );
};

export default Ratings;
