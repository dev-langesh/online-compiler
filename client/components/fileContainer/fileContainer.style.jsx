import styled from "styled-components";

export const StyledFileContainer = styled.section`
  width: 100%;
  background: #202020;
  display: flex;
  justify-content: space-around;
`;

export const File = styled.button`
  background-color: #4b4b4b;
  border: none;
  outline: none;
  color: #bdbdbd;
  padding: 7px;
  margin-bottom: 4px;
  flex: 1;
  border-right: 1px solid #bdbdbd;

  &:hover {
    background-color: #3b3b3b;
    cursor: pointer;
  }
`;
