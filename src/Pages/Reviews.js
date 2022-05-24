import React, { useEffect, useState } from "react";
import "./Reviews.css";
import ReactStars from "react-rating-stars-component";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";

// import SingleReview from "./SingleReview";

const Reviews = () => {
    // let [reviews, setReviews] = useState([]);
    let [currentIndex, setCurrentIndex] = useState(0);
    const [ratings, setRatings] = useState(0);

    const {
        data: reviews,
        isLoading,
        refetch,
    } = useQuery("reviews", () =>
        fetch(`http://localhost:5000/add-review`).then((res) => res.json())
    );

    useEffect(() => {
        refetch();
    }, [refetch]);

    if (isLoading) {
        return <Loading />;
    }
    let review = reviews[currentIndex];

    function nextButton() {
        setCurrentIndex(++currentIndex);
        if (currentIndex > reviews.length - 1) {
            setCurrentIndex(0);
        }
    }
    function prevButton() {
        setCurrentIndex(--currentIndex);

        if (currentIndex < 0) {
            setCurrentIndex(reviews.length - 1);
        }
    }
    const ratingChanged = (newRating) => {
        setRatings(newRating);
    };

    return (
        <div className="container text-center py-20">
            <h2>Review Section {reviews.length}</h2>
            <ReactStars
                count={5}
                value={review?.ratings}
                onChange={refetch()}
                activeColor="#ffd700"
                size={40}
                isHalf={true}
            />
            <div className="carousel w-3/4 mx-auto shadow-lg">
                <div id="slide1" className="carousel-item relative w-full">
                    <div class="card my-5 text-center">
                        <img id="person-img" src={review?.img} alt="" />
                        <div className="flex gap-3 w-full justify-center">
                            <ReactStars
                                count={5}
                                value={review?.ratings}
                                size={40}
                                activeColor="#ffd700"
                                isHalf={true}
                            />
                        </div>
                        <p class="person">{review?.productName}</p>
                        <p class="designation my-3">
                            User Name: {review?.userName}
                        </p>
                        <p class="designation my-3">Email: {review?.email}</p>
                        <p class="text">{review?.desc}</p>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <button onClick={nextButton} className="btn btn-circle">
                            ❮
                        </button>
                        <button onClick={prevButton} className="btn btn-circle">
                            ❯
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
