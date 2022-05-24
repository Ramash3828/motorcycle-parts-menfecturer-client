import React from "react";
import "./Reviews.css";
import ReactStars from "react-rating-stars-component";

const SingleReview = ({ review }) => {
    const { img, userName, email, productName, ratings, desc } = review;

    return (
        <div id="slide1" className="carousel-item relative w-full">
            <div class="card my-5 text-center">
                <img id="person-img" src={img} alt="" />
                <div className="flex gap-3 w-full justify-center">
                    <ReactStars
                        count={5}
                        value={ratings}
                        size={40}
                        isHalf={true}
                    />
                </div>
                <p class="person">{productName}</p>
                <p class="designation my-3">User Name: {userName}</p>
                <p class="designation my-3">Email: {email}</p>
                <p class="text">{desc}</p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                    ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                    ❯
                </a>
            </div>
        </div>
    );
};

export default SingleReview;
