import React, { useEffect, useState } from "react";
import "./Reviews.css";
import ReactStars from "react-rating-stars-component";
// import { useQuery } from "react-query";
// import Loading from "../Shared/Loading/Loading";

// import SingleReview from "./SingleReview";

const Reviews = () => {
    let [reviews, setReviews] = useState([]);
    let [currentIndex, setCurrentIndex] = useState(0);
    const [ratings, setRatings] = useState(4);

    useEffect(() => {
        fetch(`http://localhost:5000/review`, {
            method: "GET",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
            });
    }, []);

    let review = reviews[currentIndex];

    useEffect(() => {
        if (review) {
            setRatings(review?.ratings);
        }
    }, [review?.ratings, review]);

    function nextButton() {
        setCurrentIndex(++currentIndex);
        if (currentIndex > reviews?.length - 1) {
            setCurrentIndex(0);
        }
    }

    function prevButton() {
        setCurrentIndex(--currentIndex);

        if (currentIndex < 0) {
            setCurrentIndex(reviews?.length - 1);
        }
    }

    return (
        <div className="container text-center py-20">
            <h2 className="text-4xl text-primary font-bold uppercase">
                All Reviews
            </h2>

            <div className="carousel w-3/4 mx-auto shadow-lg">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="card my-5 text-center">
                        <img id="person-img" src={review?.img} alt="" />
                        <div className="flex gap-3 w-full justify-center">
                            <ReactStars
                                count={5}
                                value={ratings}
                                size={40}
                                activeColor="#ffd700"
                                isHalf={true}
                            />
                        </div>
                        <p className="person">{review?.productName}</p>
                        <p className="designation my-3">
                            User Name: {review?.userName}
                        </p>
                        <p className="designation my-3">
                            Email: {review?.email}
                        </p>
                        <p className="text mx-11 px-11 pb-11">{review?.desc}</p>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <button
                            onClick={nextButton}
                            className="btn btn-circle bg-accent"
                        >
                            ❮
                        </button>
                        <button
                            onClick={prevButton}
                            className="btn btn-circle bg-accent"
                        >
                            ❯
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
