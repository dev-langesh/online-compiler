import React from "react";
import { StyledFileContainer, File } from "./fileContainer.style";

export default function FileContainer() {
  return (
    <header>
      <StyledFileContainer>
        <File>HTML</File>
        <File>CSS</File>
        <File>JS</File>
        <File>OUTPUT</File>
      </StyledFileContainer>
    </header>
  );
}
