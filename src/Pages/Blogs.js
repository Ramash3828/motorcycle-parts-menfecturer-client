import React from "react";

const Blogs = () => {
    return (
        <div className="py- 11 mx-auto h-full relative">
            <div className="container">
                <h2 className="text-4xl text-primary font-bold mb-6 text-center">
                    Blogs (Question and Answer)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="text-left">
                        <h4>
                            <strong>Question:</strong> How will you improve the
                            performance of a React Application?
                        </h4>
                        <p>
                            <strong>Answer:</strong>To optimize React rendering,
                            need to make sure that components receive only
                            necessary props. It will let you control the
                            consumption and avoid over-rendering unnecessary
                            task. The solution is to create a functional
                            component that will collect all props and
                            redistribute them to other components.Chrome
                            provides us with a powerful tool to measure how good
                            and performant our component is. This tool is the
                            performance tab that records and analyzes the
                            performance of your project.
                        </p>
                    </div>
                    <div className="text-left">
                        <h4>
                            <strong>Question:</strong>What are the different
                            ways to manage a state in a React application?
                        </h4>
                        <p>
                            <strong>Answer:</strong>React uses an observable
                            object as the state that observes what changes are
                            made to the state and helps the component behave
                            accordingly. For example, if we update the state of
                            any component like the following display will not
                            re-render itself because React State will not be
                            able to detect the changes made.To make the state
                            change, React gives us a setState function that
                            allows us to update the value of the state. Calling
                            setState automatically re-renders the entire
                            component and all its child components. We don't
                            need to manually re-render as seen previously using
                            the renderContent function.
                        </p>
                    </div>
                    <div className="text-left">
                        <h4>
                            <strong>Question:</strong>How does prototypical
                            inheritance work?
                        </h4>
                        <p>
                            <strong>Answer:</strong>The Prototypal Inheritance
                            is a feature in javascript used to add methods and
                            properties in objects. It is a method by which an
                            object can inherit the properties and methods of
                            another object. Traditionally, in order to get and
                            set the Prototype.When it comes to inheritance,
                            JavaScript only has one construct: objects. Each
                            object has a private property which holds a link to
                            another object called its prototype. That prototype
                            object has a prototype of its own, and so on until
                            an object is reached with null as its prototype
                        </p>
                    </div>
                    <div className="text-left">
                        <h4>
                            <strong>Question:</strong>Why you do not set the
                            state directly in React?
                        </h4>
                        <p>
                            <strong>Answer:</strong> If you update it directly,
                            calling the setState afterward may just replace the
                            update you made. When you directly update the state,
                            it does not change this.Rather we should always
                            declare a new object and use this obj in setState
                            then react handle it.
                        </p>
                    </div>
                    <div className="text-left">
                        <h4>
                            <strong>Question:</strong>You have an array of
                            products. Each product has a name, price,
                            description, etc. How will you implement a search to
                            find products by name?
                        </h4>
                        <p>
                            <strong>Answer:</strong>I can implement find the
                            array in spacific value in array. I will use find
                            method for only one samilar data. find return us
                            first match the searching value as object. Other
                            hand I can implement filter method, that's return an
                            array on base of searching value that maching.
                        </p>
                    </div>
                    <div className="text-left">
                        <h4>
                            <strong>Question:</strong>What is a unit test? Why
                            should write unit tests?
                        </h4>
                        <p>
                            <strong>Answer:</strong>Unit testing ensures that
                            all code meets quality standards before it's
                            deployed. This ensures a reliable engineering
                            environment where quality is paramount. Over the
                            course of the product development life cycle, and
                            helps developers write better code, more
                            efficiently.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
