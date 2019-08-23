import React from "react";

import logo from "../../Img/Lambda_Logo_white.png";

const Logo = (props) => {
  return (
    <div className="logo-container">
      <img className="logo" src={logo} alt="Lambda's logo" onClick={() => {props.setTheme(props.theme.mode === 'dark' ? {mode: 'light'} : {mode: 'dark'})}}/>
    </div>
  );
};

export default Logo;