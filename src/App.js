// import React from "react";
import Products from "./components/Products/Products";

const App = () => {
  return (
    <div>
      <Products />
    </div>
  );

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Hello World!") // This is traditional method while the above is modern method where we use JSX.
  // );
};

export default App;
