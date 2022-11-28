import React from "react";

const Blog = () => {
  return (
    <div>
      <h2 className="text-4xl font-mono font-bold text-orange-400">My Blog</h2>
      <div className="card bg-primary text-primary-content my-6 mx-5 text-left">
        <div className="pb-3 my-7 px-20">
          <h3 className="font-bold">
            Q.1: What are the different ways to manage a state in a React
            application?
          </h3>
          <p>
            Ans: There are four main types of state you need to properly manage
            in your React apps: <br />
            1.Local state <br />
            2.Global state <br />
            3.Server state <br />
            4.URL state
          </p>
        </div>

        <div className="pb-3 my-7 px-20">
          <h3 className="font-bold">
            Q.2: How does prototypical inheritance work?
          </h3>
          <p>
            Ans: The Prototypal Inheritance is a feature in javascript used to
            add methods and properties in objects. It is a method by which an
            object can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object. getPrototypeOf and Object.
          </p>
        </div>

        <div className="pb-3 my-7 px-20">
          <h3 className="font-bold">
            Q.3: What is a unit test? Why should we write unit tests?
          </h3>
          <p>
            Ans: The main objective of unit testing is to isolate written code
            to test and determine if it works as intended. Unit testing is an
            important step in the development process, because if done
            correctly, it can help detect early flaws in code which may be more
            difficult to find in later testing stages.
          </p>
        </div>

        <div className="pb-3 my-7 px-20">
          <h3 className="font-bold mb-2">
            Q.4: Write The difference Between React vs. Angular vs. Vue.
          </h3>
          <div className="overflow-x-auto text-black">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>React</th>
                  <th>Angular</th>
                  <th>Vue</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>React is launch in 2013 and develop by Facebook</td>
                  <td>Angular is launch in 2010 and develop by google</td>
                  <td>Vue is launch in 2014 and develop by Evan</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>vast community</td>
                  <td>Large community as it is the oldest</td>
                  <td>Growing community</td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>
                    Large scale apps <br />
                    Real-time apps <br />
                    Scalable apps
                  </td>
                  <td>
                    Cross-platform apps <br />
                    Apps requiring quick development and deployment <br />
                    For extending the functionalities of the existing app
                  </td>
                  <td>
                    Apps targeting early market entry <br />
                    Lightweight apps <br />
                    Intuitive apps
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
