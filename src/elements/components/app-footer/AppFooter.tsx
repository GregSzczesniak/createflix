import React from "react";
import createflixLogo from "../../../createfix-logo.png";

export default function AppFooter() {
  return (
    <footer className={["pb-16", "text-sm", "leading-6"].join(" ")}>
      <div
        className={[
          "max-w-7xl",
          "mx-auto",
          "divide-y",
          "divide-slate-200",
          "px-4",
          "sm:px-6",
          "md:px-8",
          "dark:divide-slate-700",
        ].join(" ")}
      >
        <div className={["mt-8", "pt-4"].join(" ")}>
          <a href="/">
            <img src={createflixLogo} alt="Creatflix logo" />
          </a>
        </div>
      </div>
    </footer>
  );
}
