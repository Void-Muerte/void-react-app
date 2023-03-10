import "./styles.css";
import { useState, useEffect } from "react";

export default function () {
  const [first, changefirst] = useState("In a good mood!");
  const [secondary, changeSecondary] = useState("Nice");
  useEffect(() => {
    console.log(`We are ${first} today!`);
  }, [first]);
  useEffect(() => {
    console.log(`Its ${secondary} here!`);
  }, [secondary]);
  return (
    <div className="Def App compo">
      <h2>Today I'm {first}</h2>
      <button
        onClick={() => {
          changefirst("in a happy mood");
        }}
      >
        Change Mood
      </button>
      <button
        onClick={() => {
          changeSecondary("Awesome");
        }}
      >
        Change Day to Awesome
      </button>
    </div>
  );
}
