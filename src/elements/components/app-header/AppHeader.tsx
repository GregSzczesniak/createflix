import React from "react";
import AppLogo from "../app-logo/AppLogo";
import Navbar from "../navbar/Navbar";
import HeaderIcon from "../header-icon/HeaderIcon";
import gitlabIcon from "../../../gitlab-icon-rgb.png";

export default function AppHeader() {
  return (
    <header className="header">
      <div className={["px-4", "sm:px-6", "md:px-8"].join(" ")}>
        <div
          className={[
            "relative",
            "pt-1",
            "lg:pt-2",
            "flex",
            "items-center",
            "justify-between",
            "text-slate-700",
            "font-semibold",
            "text-sm",
            "leading-6",
            "dark:text-slate-200",
          ].join(" ")}
        >
          <AppLogo />
          <h1 className="sr-only">Createflix</h1>
          <div className={["flex", "items-center"].join(" ")}>
            <div className={["hidden md:flex", "items-center"].join(" ")}>
              <Navbar elements={["Instructions", "Movie List", "Favorites"]} />
              <div
                className={[
                  "flex",
                  "items-center",
                  "border-l",
                  "border-slate-200",
                  "ml-6",
                  "pl-6",
                  "dark:border-slate-800",
                ].join(" ")}
              >
                <HeaderIcon
                  icon={gitlabIcon}
                  link="https://gitlab.createit.pl:8888/js-dept/createflix"
                  alt="Gitlab Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
