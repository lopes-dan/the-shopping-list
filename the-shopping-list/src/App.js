import "./index.css";
import Accordion from "./components/UI/Accordion";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  return (
    <>
      <header className="title-header">
        <h2> Kah's List</h2>
        <FontAwesomeIcon className="heart" icon={faHeart} />
      </header>
      <Accordion />
    </>
  );
}
