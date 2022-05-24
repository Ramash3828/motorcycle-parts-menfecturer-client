import React, { useEffect, useState } from "react";
import "./Reviews.css";
import ReactStars from "react-rating-stars-component";

// import SingleReview from "./SingleReview";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/add-review`)
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <div className="container text-center py-20">
            <h2>Review Section {reviews.length}</h2>
            <div className="carousel w-3/4 mx-auto shadow-lg">
                {reviews.map((review, index) => (
                    <div
                        id={`slide${index + 1}`}
                        className="carousel-item relative w-full"
                    >
                        <div class="card my-5 text-center">
                            <img id="person-img" src={review.img} alt="" />
                            <div className="flex gap-3 w-full justify-center">
                                <ReactStars
                                    count={5}
                                    value={review.ratings}
                                    size={40}
                                    isHalf={true}
                                />
                            </div>
                            <p class="person">{review.productName}</p>
                            <p class="designation my-3">
                                User Name: {review.userName}
                            </p>
                            <p class="designation my-3">
                                Email: {review.email}
                            </p>
                            <p class="text">{review.desc}</p>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a
                                href={`#slide${reviews.length}`}
                                className="btn btn-circle"
                            >
                                ❮
                            </a>
                            <a
                                href={`#slide${index + 2}`}
                                className="btn btn-circle"
                            >
                                ❯
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
