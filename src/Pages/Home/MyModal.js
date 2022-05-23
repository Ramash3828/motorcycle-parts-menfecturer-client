import React from "react";

const MyModal = ({ item }) => {
    const { name, price, img, quantity, desc } = item;
    // console.log(product);
    return (
        <div>
            {/* <!-- The button to open modal --> */}

            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className="py-4">{desc}</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">
                            Submit
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyModal;
