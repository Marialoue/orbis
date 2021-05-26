import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { ReactComponent as HelpIcon } from "../assets/help-circle.svg";
import { ReactComponent as Layers } from "../assets/layers.svg";
import Button from "@material-ui/core/Button";

const Header = () => {
  const [showSub, setShowSub] = useState(false);
  const [value, setValue] = useState(null);

  const handleClick = (event) => {
    console.log(event);
    setShowSub(event);
  };

  const handleSelect = (event) => {
    console.log(event);
    setValue(event);
  };

  return (
    <nav>
      <div className="nav-brand">
        <a href="/">Covid-19 vaccinering | Sverige</a>
      </div>
    </nav>
  );
};

export default withRouter(Header);
