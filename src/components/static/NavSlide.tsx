import styled from "styled-components";
import NavComp from "./NavComp";

import { useEffect, useState } from "react";
import { getSearchedVideo, searchData } from '../../api/API'

const NavSlide = () => {

  const [click, setClick] = useState<Array<{}>>([])
  return (
    <Container>
      <NavComp bg="i" text="All" onClick={() => {
        localStorage.setItem("data", JSON.stringify("all"))
        window.location.reload()
      }} />
      <NavComp bg="i" text="News" onClick={() => {
        localStorage.setItem("data", JSON.stringify("News"))
        window.location.reload()
      }} />
      <NavComp bg="i" text="Debates" onClick={() => {
        localStorage.setItem("data", JSON.stringify("Debates"))
        window.location.reload()
      }} />
      <NavComp bg="i" text="Music" onClick={() => {
        localStorage.setItem("data", JSON.stringify("Music"))
        window.location.reload()
      }} />
      <NavComp bg="i" text="Live" onClick={() => {
        localStorage.setItem("data", JSON.stringify("Live"))
        window.location.reload()
      }} />
      <NavComp bg="i" text="Sport" onClick={() => {
        localStorage.setItem("data", JSON.stringify("Sport"))
        window.location.reload()
      }} />
      <NavComp bg="i" text="Troops" onClick={() => {
        localStorage.setItem("data", JSON.stringify("Troops"))
        window.location.reload()
      }} />
      <NavComp bg="i" text="Website" onClick={() => {
        localStorage.setItem("data", JSON.stringify("Website"))
        window.location.reload()
      }} />
    </Container>
  );
};

export default NavSlide;

const Container = styled.div`
  display: flex;
  align-items: center;
`;
