import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center">
      <ul className="grid grid-flow-col grid-rows-1 gap-5">
        <li className="group">
          <a
            href="/panel/login"
            className="font-bold block group-hover:text-primary-100"
            title="Login"
          >
            Masuk
          </a>
        </li>
        <li className="group">
          <a
            href="/panel/register"
            className="font-bold block group-hover:text-primary-100"
            title="Login"
          >
            Daftar
          </a>
        </li>
      </ul>
    </nav>
  );
}
