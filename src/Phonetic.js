import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen Pronunciation
      </a>
      <i class="fa-solid fa-ear-listen"></i>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
