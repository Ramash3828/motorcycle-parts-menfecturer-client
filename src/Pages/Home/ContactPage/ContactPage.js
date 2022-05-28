import { Form } from "react-bootstrap";

import "./ContactPage.css";
import lcImg from "../../../images/maxresdefault.jpg";

const ContactPage = () => {
    const onHandleTitweer = () => {
        window.open("https://twitter.com/");
    };

    const onHandleFacebook = () => {
        window.open("https://www.facebook.com/");
    };

    const onHandleSkype = () => {
        window.open("https://www.skype.com/en/");
    };

    const onHandleInstagram = () => {
        window.open("https://www.instagram.com/");
    };

    return (
        <div className="py-11 location-area">
            <div className="container text-center">
                <h2 className="text-primary text-4xl font-bold mx-auto mb-5">
                    About Us
                </h2>
                <div className="flex-col gap-7 justify-center w-full md:w-1/2 mx-auto">
                    <div className="flex-1 items-center flex-column w-full ">
                        <div>
                            <div className="con-form-area text-Left">
                                <h4 className="mb-3 md:text-start text-center form-title text-secondary text-2xl font-bold">
                                    Social Contact
                                </h4>
                                <Form className="text-start">
                                    <textarea
                                        className=" w-full"
                                        id="exampleFormControlTextarea4"
                                        rows="3"
                                    ></textarea>
                                    <div class=" mt-5">
                                        <div>
                                            {" "}
                                            <input
                                                type="text"
                                                placeholder="Your email"
                                                class="input input-bordered w-full max-w-xl"
                                            />
                                        </div>
                                        <button class="btn btn-wide w-full btn-secondary mt-4">
                                            Email
                                        </button>
                                    </div>
                                </Form>
                            </div>
                            <div className=" py-4 w-full flex justify-center ">
                                <button
                                    onClick={onHandleTitweer}
                                    className="contact-btn"
                                >
                                    <i className="fa-brands fa-twitter"></i>
                                </button>
                                <button
                                    onClick={onHandleFacebook}
                                    className="contact-btn"
                                >
                                    <i className="fa-brands fa-facebook-f"></i>
                                </button>
                                <button
                                    onClick={onHandleSkype}
                                    className="contact-btn"
                                >
                                    <i className="fa-brands fa-skype"></i>
                                </button>
                                <button
                                    onClick={onHandleInstagram}
                                    className="contact-btn"
                                >
                                    <i className="fa-brands fa-instagram-square"></i>
                                </button>
                            </div>
                            <div className=" flex justify-center gap-5">
                                <p>
                                    <strong>
                                        <i className="fa-solid fa-phone"></i>
                                    </strong>{" "}
                                    017XXXXXXXXX
                                </p>
                                <p>
                                    <strong>
                                        <i className="fa-solid fa-envelope"></i>
                                    </strong>{" "}
                                    example@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="location-img py-7 flex-1">
                        <img
                            className="rounded-none object-cover w-full h-full"
                            src={lcImg}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
