import React from "react";

const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="logo">RealFlex</div>
      <div className="nav-menu">
        <ul>
          <li>
            <i class="fa-solid fa-house"></i>
            <p>Home</p>
          </li>
          <li>
            <i class="fa-solid fa-video"></i>
            <p>Movies</p>
          </li>
          <li>
            <i class="fa-solid fa-tv"></i>
            <p>Tv-series</p>
          </li>
          <li>
            <i class="fa-solid fa-clapperboard"></i>
            <p>Upcoming</p>
          </li>
        </ul>
      </div>
      <div className="logout"></div>
    </div>
  );
};

export default Navbar;
