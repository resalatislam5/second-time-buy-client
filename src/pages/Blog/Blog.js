import React from 'react';

const Blog = () => {
    return (
        <div className='mx-28'>
            <div className="card  bg-base-100 shadow-xl my-5">
                <div className="card-body">
                    <h2 className="card-title">1.What are the different ways to manage a state in a React application?</h2>
                    <p className='text-xl'>Ans: We'll start by talking about what state is, and then go through the many tools you can use to manage it.We'll look at the simple useState hook and also learn about more complex libraries like Redux. Then we'll check out the most recent options available like Recoil and Zustand.</p>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl my-5">
                <div className="card-body">
                    <h2 className="card-title">2.How does prototypical inheritance work?</h2>
                    <p className='text-xl'>Ans: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl my-5">
                <div className="card-body">
                    <h2 className="card-title">3.What is a unit test? Why should we write unit tests?</h2>
                    <p className='text-xl'>Ans: The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl my-5">
                <div className="card-body">
                    <h2 className="card-title">4.React vs. Angular vs. Vue?</h2>
                    <p className='text-xl'>Ans: There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular.
                        React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.They can be used almost interchangeably to build front-end applications, butthey’re not 100 percent the same, so it makes sense to compare them and understand their differences.Each framework is component-based and allows the rapid creation of UI features.
                        However, they all have a different structure and architecture — so first, we’ll look into their architectural differences to understand the philosophy behind them</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;