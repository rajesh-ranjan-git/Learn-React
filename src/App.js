// import React from "react";
import ListItem from "./components/ListItem";

const App = () => {
  return (
    <div tabIndex="" className="" onClick="">
      <ListItem
        data={{
          discountedPrice: 340,
          price: 450,
          title: "Title of the Item",
          thumbnail: "placeholder.png",
        }}
      ></ListItem>
      <ListItem
        data={{
          discountedPrice: 80,
          price: 100,
          title: "Title of the Item",
          thumbnail: "placeholder.png",
        }}
      ></ListItem>
    </div>
  );

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Hello World!") // This is traditional method while the above is modern method where we use JSX.
  // );
};

export default App;
