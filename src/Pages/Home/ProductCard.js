import React, { useEffect, useState } from "react";

import Order from "./Order";
import SingleCard from "./SingleCard";

const ProductCard = () => {
    const [item, setItem] = useState({});
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/add-product`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <>
            <div className="container text-center py-11">
                <h2 className="text-5xl text-primary text-bold mb-7">
                    Parts Recommended
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center  w-full gap-10 mt-11">
                    {products.map((product, index) => (
                        <SingleCard
                            key={index}
                            product={product}
                            setItem={setItem}
                        />
                    ))}
                </div>
            </div>
            {item && <Order setItem={setItem} item={item} />}
        </>
    );
};

export default ProductCard;
