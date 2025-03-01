import React, { useEffect, useState } from "react";

// SCSS FILE
import "./darkmode.scss";

// Icons
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    //   document.documentElement
    window.matchMedia("(prefers-color-scheme: dark)").matches == "dark"
      ? setIsDarkMode(true)
      : setIsDarkMode(false);
  }, []);

  function handleDarkMode() {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "light");
      setIsDarkMode(!isDarkMode);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      setIsDarkMode(!isDarkMode);
    }
    console.log("done");
  }

  return (
    <div className="darkMode">
      <button onClick={handleDarkMode}>
        {isDarkMode ? (
            <LightModeIcon className="icon" />
        ) : (
            <DarkModeIcon className="icon" />
        )}
      </button>
    </div>
  );
}

export default DarkMode;
