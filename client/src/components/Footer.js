import React from "react";

export default function Footer() {
  return (
    <>
      <div id="footer">
        <span className="names">
          Hannes Cho <i className="fab fa-facebook-square"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-instagram-square"></i>
          <i className="fab fa-github-square"></i>
        </span>
        <div className="line"></div>
        <div className="copyright">
          © 2021 All Rights Reserved © 2021 TheMealDB Copyright (data api)
          <a className="navbar-brand" href="https://www.themealdb.com">
            <img
              src="https://www.themealdb.com/images/logo-small.png"
              alt="logo"
              width="100px"
            />
          </a>
        </div>
      </div>
    </>
  );
}
