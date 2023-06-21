import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown/";
// @ts-ignore
import Readme from "./README.md";

import "github-markdown-css/github-markdown-light.css";

export default function Instructions() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(Readme)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <section
      className={[
        "instructions",
        "relative",
        "max-w-7xl",
        "mx-auto",
        "px-4",
        "focus:outline-none",
        "sm:px-3",
        "md:px-5",
      ].join(" ")}
    >
      <h2 className="sr-only">Instructions</h2>
      <article>
        <ReactMarkdown className={["markdown-body"].join(" ")}>
          {content}
        </ReactMarkdown>
      </article>
    </section>
  );
}
