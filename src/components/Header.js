import React from "react";
import { ReactComponent as HelpIcon } from "../assets/help-circle.svg";
import { ReactComponent as Settings } from "../assets/settings.svg";
import { ReactComponent as Layers } from "../assets/layers.svg";

const Header = () => {
  return (
    <div className="app-header">
      <h2>Covid-19 vaccin tracker</h2>
      <div className="header-menu">
        <button onClick={console.log("help")}>
          <HelpIcon />
        </button>
        <button onClick={console.log("layers")}>
          <Layers />
        </button>
        <button onClick={console.log("settings")}>
          <Settings />
        </button>
      </div>
    </div>
  );
};

export default Header;
