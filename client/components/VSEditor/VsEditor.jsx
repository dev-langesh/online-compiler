import Editor, { useMonaco } from "@monaco-editor/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getCurrentLanguage } from "../../src/features/editor/languageSlice";

const language = {
  javascript: {
    name: "script.js",
    language: "javascript",
    value: "// write your js code",
  },
  css: {
    name: "style.css",
    language: "css",
    value: "/* wirte your css code */",
  },
  html: {
    name: "index.html",
    language: "html",
    value: "<!--Write your html code-->",
  },
};

export default function VsEditor() {
  const currentLang = useSelector(getCurrentLanguage);
  const [srcDoc, setSrcDoc] = useState("");
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  function changeHandler(value, event) {
    if (currentLang === "html") {
      setHtml(value);
    } else if (currentLang === "css") {
      setCss(value);
    } else if (currentLang === "javascript") {
      setJs(value);
    }

    const output = `
             <html>
              <style>${css}</style>
              <body>
                ${html}
              </body>
              <script>${js}</script>
          </html> 
      `;
    console.log(output);
    setSrcDoc(output);
  }

  useEffect(() => {
    document.getElementById("output").innerHTML = "<h1>Hello world</h1>";
    console.log(currentLang);
  }, []);

  return (
    <main className="flex">
      <Editor
        width="100%"
        height="80vh"
        path={language[currentLang].name}
        defaultLanguage={currentLang}
        defaultValue={language[currentLang].value}
        theme="vs-dark"
        onChange={changeHandler}
      />
      <section style={{ height: "100vh" }}>
        <iframe
          srcDoc={srcDoc}
          sandbox="allow-scripts"
          width="100%"
          height="100%"
          title="output"
          id="output"
        ></iframe>
        <A href="#editor" style={{}}>
          Back to code
        </A>
      </section>
    </main>
  );
}

const A = styled.a`
  display: block;
  padding: 10px;
`;
