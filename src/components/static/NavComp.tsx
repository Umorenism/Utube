import React from "react";
import styled from "styled-components";

interface iProps {
  bg?: string;
  text?: string;
  onClick?: any;
}
const NavComp: React.FC<iProps> = ({ bg, text, onClick }) => {
  return (
    <div>
      <Container bg={bg} onClick={onClick}>
        <Txt bg={bg}>{text}</Txt>
      </Container>
    </div>
  );
};

export default NavComp;

const Txt = styled.div<{ bg?: string }>`
  font-size: 14px;
  color: ${({ bg }) => (bg ? "white" : "black")};
`;
const Container = styled.div<{ bg?: string }>`
  padding: 8px 20px;
  background-color: ${({ bg }) => (bg ? "black" : "#E5E5E5")};
  border-radius: 5px;
  margin: 10px 5px;
  transition: all 350ms;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
