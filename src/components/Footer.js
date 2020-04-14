import React from "react";

export default function Footer() {
  const currentyear = new Date().getFullYear();
  return (
    <div className="footer">
      <h4> Footer {currentyear}</h4>
    </div>
  );
}
