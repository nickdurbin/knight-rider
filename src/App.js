import React, { useState } from "react";
import "./App.css";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";

function App() {

  const [display, setDisplay] = useState('');

  // Require and style the background image
  const handsImg = require('../src/Img/colorfulhands.jpg');
  const backgroundStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${handsImg})`,
    backgroundSize: 'cover',
    margin: '0 auto',
  };

  return (
    <div className="background-image" style={ backgroundStyle}>
      <div className="back-container">
        <div className="main-container">
          <Logo />
          <Display total={display}/>
          <div className='buttons-container'>
            <div className="special-number">
              <Specials setDisplay={setDisplay} display={display}/>
              <Numbers setDisplay={setDisplay} display={display}/>
            </div>
            <div className="operators">
              <Operators setDisplay={setDisplay} display={display}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;