import Editor, { useMonaco } from "@monaco-editor/react";
import React, { useEffect } from "react";

const file = {
  "script.js": {
    name: "script.js",
    language: "javascript",
    value: "// write your js",
  },
  "style.css": {
    name: "style.css",
    language: "css",
    value: "// wirte your css code",
  },
  "index.html": {
    name: "index.html",
    language: "html",
    value: "<!--Write your html code-->",
  },
};

export default function VsEditor() {
  function changeHandler(value, event) {
    document.getElementById("output").innerHTML = value;
    const output = eval(value);
    console.log(output);
  }

  useEffect(() => {
    document.getElementById("output").innerHTML = "<h1>Hello world</h1>";
  }, []);

  const monaco = useMonaco();

  useEffect(() => {
    if (monaco) {
      console.log("here is the monaco instance:", monaco);
    }
  }, [monaco]);

  return (
    <main className="flex">
      <Editor
        width="100%"
        height="100vh"
        defaultLanguage="html"
        defaultValue="<h1>Hello World</h1>"
        theme="vs-dark"
        onChange={changeHandler}
      />
      <section id="output"></section>
    </main>
  );
}
