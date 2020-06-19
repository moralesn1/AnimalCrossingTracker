import React from "react";

export default function Footer() {
  const currentyear = new Date().getFullYear();
  return (
    <div className="footer">
      <h4>
        {" "}
        Nathaniel Morales <span>&#169;</span> {currentyear}
      </h4>
    </div>
  );
}
