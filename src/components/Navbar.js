import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to={"/"}>TravelMedia.in</Link>
      </div>
      <div className="searchIcon">
        <i class="fa-solid fa-house"></i>
        <i class="fa-solid fa-bell"></i>
        <i class="fa-solid fa-bookmark"></i>
        <i class="fa-solid fa-user"></i>
      </div>
      <div></div>
    </div>
  );
};
export default Navbar;
