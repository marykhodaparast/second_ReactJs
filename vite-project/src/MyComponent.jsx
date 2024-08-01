import React, { useState, useEffect, useRef } from "react";

function MyComponent() {

  const ref = useRef(0);
  let [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("COMPONENT RENDERED.");

  });

  function handleClick() {
    setNumber(n => n + 1);
  }
  return <button onClick={handleClick}>
    Click me!
  </button>;
}
export default MyComponent;
