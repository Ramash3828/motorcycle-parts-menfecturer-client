import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import Order from "./Order";
import SingleCard from "./SingleCard";

const ProductCard = () => {
    const [item, setItem] = useState({});

    const { data: products, isloading } = useQuery("products", () =>
        fetch(`http://localhost:5000/get-product`).then((res) => res.json())
    );
    if (isloading) {
        return <Loading />;
    }

    return (
        <>
            <div className="container text-center py-11">
                <h2 className="text-5xl text-primary text-bold mb-7">
                    Parts Recommended
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center  w-full gap-10 mt-11">
                    {products?.map((product, index) => (
                        <SingleCard
                            key={index}
                            product={product}
                            setItem={setItem}
                        />
                    ))}
                </div>
            </div>
            {item && <Order item={item} />}
        </>
    );
};

export default ProductCard;
