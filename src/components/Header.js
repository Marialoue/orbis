import React, { useState } from "react";
// import { withRouter } from "react-router-dom";
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
      <div className="nav-menu">
        {/* <li>
          <a href="about">
            <Button>
              <HelpIcon />
            </Button>
          </a>
        </li>
        <li>
          <Button onClick={handleClick}>
            <Layers />
          </Button>
          {showSub ? (
            <select onSelect={handleSelect}>
              <option value="option-1">option-1</option>
              <option value="option-2">option-2</option>
              <option value="option-3">option 3</option>
            </select>
          ) : null}
        </li> */}
      </div>
    </nav>
  );
};

export default Header;
