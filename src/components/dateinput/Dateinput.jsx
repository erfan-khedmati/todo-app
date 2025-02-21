import React, { useRef } from "react";

// Scss file
import "./dateinput.scss";

function Dateinput({ ref, defaultValue }) {
  // ErrorBox Ref
  let errRef = useRef();

  function handleChange(e) {
    // Hanlde remove the characters
    let input = e.target.value.replace(/\D/g, "");
    if (e.target.value[-1] !== "/") {
      input = e.target.value.replace(/\D/g, "");
    }

    let formattedValue = input;

    // Handle enter or remove the places

    if (input.length > 4)
      formattedValue = `${input.slice(0, 4)}/${input.slice(4)}`;

    if (input.length)
      if (input.length > 6)
        formattedValue = `${input.slice(0, 4)}/${input.slice(
          4,
          6
        )}/${input.slice(6)}`;

    e.target.value = formattedValue;

    // Got error if less than 8 characters
    if (input.length < 8) {
      errRef.current.style.display = "block";
    } else {
      errRef.current.style.display = "none";
    }
  }

  return (
    <div className="dateInputBody">
      <div ref={errRef} className="err">
        valid date : YYYY/MM/DD
        <div className="triangle"></div>
      </div>
      <input
        className="dateInput"
        ref={ref}
        readOnly
        maxLength="10"
        defaultValue={defaultValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default Dateinput;
