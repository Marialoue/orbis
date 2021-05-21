import React from "react";
import { ReactComponent as HelpIcon } from "../assets/help-circle.svg";
import { ReactComponent as Settings } from "../assets/settings.svg";
import { ReactComponent as Layers } from "../assets/layers.svg";
import Button from "@material-ui/core/Button";

const Header = () => {
  return (
    <div className="app-header">
      <h2>Covid-19 vaccin tracker</h2>
      <div className="header-menu">
        <Button >
          <HelpIcon />
        </Button>
        <Button >
          <Layers />
        </Button>
        <Button >
          <Settings />
        </Button>
      </div>
    </div>
  );
};

export default Header;
