import React from "react";
import Button from "./Button";

const Header = (props) => {
  // const onClick = () => {
  //   console.log("just");
  // };
  return (
    <>
      <header className="header ">
        <div>{props.title}</div>
        <Button
          color={props.showAdd ? 'green' : 'purple'}
          text={props.showAdd ? "Close" : "Add"}
          onClick={props.onAdd}
        />
      </header>
    </>
  );
};

// const headingStyle = {
//   color: "blue",
//   backgroundColor: "purple",
// };

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
