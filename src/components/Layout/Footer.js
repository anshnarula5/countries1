import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        className="page-footer font-small special-color-dark bg-dark text-light py-4 "
      >
        <div className="footer-copyright text-center py-3 container">
          Follow me on github
          <a href="https://github.com/anshnarula5/" style = {{textDecoration : "none"}}> @anshnarula5</a>
        </div> 
      </footer>
    </div>
  );
};

export default Footer;
