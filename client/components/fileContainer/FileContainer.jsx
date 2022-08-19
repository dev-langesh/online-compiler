import React from "react";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../../src/features/editor/languageSlice";
import { StyledFileContainer, File, Output } from "./fileContainer.style";

export default function FileContainer() {
  const dispatch = useDispatch();

  function clickHandler(lang) {
    dispatch(changeLanguage(lang));
  }

  return (
    <header>
      <StyledFileContainer>
        <File onClick={() => clickHandler("html")}>HTML</File>
        <File onClick={() => clickHandler("css")}>CSS</File>
        <File onClick={() => clickHandler("javascript")}>JS</File>
        <Output href="#output">OUTPUT</Output>
      </StyledFileContainer>
    </header>
  );
}
