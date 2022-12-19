import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";
import appSlice from "../features/addData/appSlice";
import logo from "../images/logo.png";

const Navbar = () => {
  const data = useSelector((state) => state.appSliceReducer.value);

  //   console.log("NAVBAR", data);
  return (
    <nav className="navbar">
      {/* <nav className={`${data[0]?.headerColor ? "navbar" : ""}`}> */}
      <div className="navbar_container">
        <AiOutlineMenu size={25} color="white" />
        <img src={logo} alt="Logo" style={{ cursor: "pointer" }} />
        <AiOutlineMenu size={25} color="white" />
      </div>
    </nav>
  );
};

export default Navbar;
