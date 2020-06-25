import React from "react";

export default function Footer() {
  const currentyear = new Date().getFullYear();
  return (
    <div className="footer">
      <h4> </h4>
      <p>
        Created by <a href="https://moralesn1.github.io/">Nathaniel Morales </a>
        <span>&#169;</span> {currentyear}
      </p>
      <br></br>
      <p className="footer-copyright-notice">
        All product names, logos, and brands are property of their respective
        owners. All company, product and service names used in this website are
        for identification purposes only. Use of these names, logos, and brands
        does not imply endorsement.
      </p>
    </div>
  );
}
