// import { useEffect, useState } from "react";
import "../css/style.css";

const Header = ({ user }) => {
  return (
    <div className="banner-outer">
      <section className="banner-user">Logged in as: {user}</section>
      <section className="banner-inner">NC News</section>
    </div>
  );
};

export default Header;
