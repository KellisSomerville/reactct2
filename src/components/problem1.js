import React from "react";

// created a function with a button that uses props as the parameter
// returns the title prop which will be used to render the title of the button
function MyButton(props) {
  return (
    <div>
      <button>{props.title}</button>
    </div>
  );
}

// 2 instances of the MyButton are made with different titles taken from the title prop
function Problem1() {
  return (
    <div>
      <h1>Problem 1</h1>
      <MyButton title="Add to Cart" />
      <MyButton title="Find Out More!" />
    </div>
  );
}

// exports the Problem1 function
export default Problem1;
