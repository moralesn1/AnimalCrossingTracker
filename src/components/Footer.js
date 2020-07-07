import React from "react";

export default function Footer() {
  const currentyear = new Date().getFullYear();
  return (
    <div className="footer">
      <h4> </h4>

      <p>
        Enjoyed this application? Feel free to buy me a coffee or donate
        directly to my{" "}
        <b>
          <a
            href="https://paypal.me/vendrak"
            target="_blank"
            rel="noopener noreferrer"
          >
            Paypal
          </a>
        </b>
      </p>
      <p>
        Created by{" "}
        <b>
          <a
            href="https://moralesn1.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nathaniel Morales{" "}
          </a>
        </b>
        <span>&#169;</span> {currentyear}
      </p>
      <p>Artwork by Cherrie T</p>

      <br></br>
      <p className="footer-copyright-notice">
        Special thanks to{" "}
        <b>
          <a
            href="http://acnhapi.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ANCH API
          </a>{" "}
        </b>
        for creating such a wonderful API.
        <br />
      </p>
    </div>
  );
}
