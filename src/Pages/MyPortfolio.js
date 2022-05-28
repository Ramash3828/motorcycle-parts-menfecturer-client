import React from "react";
import profilePic from "../images/ramash.jfif";

const MyPortfolio = () => {
    const projectOne = () => {
        window.open(
            "https://jpylvtq5flcxrrrzq7vzya.on.drv.tw/HomeWork/chillaid/",
            "_blank"
        );
    };
    const projectTwo = () => {
        window.open(
            "https://jpylvtq5flcxrrrzq7vzya.on.drv.tw/HomeWork/new%20project/",
            "_blank"
        );
    };
    const projectThree = () => {
        window.open("https://psd-to-html.ramashhalder.repl.co/");
    };

    return (
        <div className="py-11">
            <div className="container py-5 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                    <div className="rounded-full flex items-center justify-center w-full">
                        <img
                            className="image-full rounded-full mx-auto"
                            src={profilePic}
                            alt=""
                        />
                    </div>
                    <h4 className="text-primary text-2xl font-bold my-4">
                        Contact Me:
                    </h4>
                    <p>ramash3828@gmail.com</p>
                    <p>Facebook: Ramash Halder</p>
                    <div>
                        <h3 className="text-primary text-2xl font-bold my-4">
                            Previous Practice projects live link:
                        </h3>
                        <ul>
                            <li>
                                <button
                                    onClick={projectOne}
                                    className="btn btn-link"
                                >
                                    Project 1
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={projectTwo}
                                    className="btn btn-link"
                                >
                                    Project 1
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={projectThree}
                                    className="btn btn-link"
                                >
                                    Project 1
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <div className="skill text-left">
                        <h4 className="text-primary text-2xl font-bold my-4">
                            My Skill:
                        </h4>
                        <ul>
                            <li>HTML5</li>
                            <li>
                                CSS (<strong>Framework:</strong> Bootstrap 5,
                                Tailwind CSS)
                            </li>
                            <li>JavaScript</li>
                            <li>React JS (Library)</li>
                            <li>
                                {" "}
                                <strong>Backend:</strong>
                                <ul>
                                    <li>Node.js (Express.js)</li>
                                    <li>MongoDB</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="aboutMe text-left">
                        <h4 className="text-primary text-2xl font-bold my-4">
                            My Explanation
                        </h4>
                        <p>
                            I am a student of Programming Hero Batch 5 in course
                            of Web Development. I want learn font end and Back
                            end development. I always try to follow all the
                            rules and regulations of the programming-hero and
                            follow the instructions of the officials of the
                            organization and work hard enough to learn something
                            good for me which helps me to build a better future.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;
