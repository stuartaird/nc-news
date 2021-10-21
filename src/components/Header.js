// import { useEffect, useState } from "react";
import "../css/style.css";

const Header = ({ user }) => {
  return (
    <div class="banner-outer">
      <section class="banner-user">Logged in as: {user}</section>
      <section class="banner-inner">NC News</section>
    </div>
  );
};

export default Header;
