import React from "react";
import { Link } from "wouter";
import { utilizeString } from "../../../utils";

import "./Navbar.scss";

interface INavbarProps {
  /**
   * Elements displayed in Navbar
   */
  elements: string[];
}

export default function Navbar({ ...props }: INavbarProps) {
  const { elements } = props;
  const navigationList = elements.map((e) => (
    <li key={`key-${e}`}>
      <Link href={`/${utilizeString(e)}`}>
        <a
          className="link"
        >
          {e}
        </a>
      </Link>
    </li>
  ));

  return (
    <nav className={["navbar"].join(" ")}>
      <ul className={["flex", "items-center", "space-x-8"].join(" ")}>
        {navigationList}
      </ul>
    </nav>
  );
}
