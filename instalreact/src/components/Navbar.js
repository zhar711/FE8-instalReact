import React from "react";
import "../../src/style/Navbar.css";
// import { useRouter } from "next/router";

export default function Navbar() {
  return (
    <nav>
      <ul className="menu">
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
    </nav>
  );
}
