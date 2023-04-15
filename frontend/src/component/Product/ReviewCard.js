import React from "react";
import ReactStars from "react-stars";
import profilePng from "../../images/Profile.png";
const ReviewCard = ({review}) => {

    const options = {
        edit: false,
        color: "rgba(20,20,20,0,1)",
        activecolor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: review.rating,
        isHalf: true,
      };


  return <div>   <div className="reviewCard">
  <img src={profilePng} alt="User" />
  <p>{review.name}</p>
  <ReactStars {...options} />
  <span className="reviewCardComment">{review.comment}</span>
</div></div>;
};

export default ReviewCard;
