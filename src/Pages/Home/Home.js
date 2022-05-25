import React from "react";
import banner from "../../images/banner2.jpg";
import Reviews from "../Reviews";
import BusinessDetails from "./BusinessDetails";
import ProductCard from "./ProductCard";

const Home = () => {
    return (
        <>
            <div
                style={{
                    backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${banner})`,

                    backgroundSize: "cover",
                }}
                className=" py-20"
            >
                <div className="card-body text-center w-full text-white">
                    <h2 className="card-title text-4xl md:text-6xl">
                        Professional Motorcycle Parts Manufacturer
                    </h2>
                    <h3 className="text-1xl md:text-4xl font-bold mt-5">
                        Genuine Parts from PHM Manufacturers
                    </h3>
                </div>
            </div>
            <ProductCard />
            <Reviews />
            <BusinessDetails />
        </>
    );
};

export default Home;
