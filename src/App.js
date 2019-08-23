import React, { useState } from "react";
import "./App.css";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";

function App() {

  const [display, setDisplay] = useState('');

  const handleClick = (props) => {
    return props.setDisplay(props.display + props.symbol);
  }

  const handleSpecialButton = (props) => {
    if (props.symbol === 'C') {
      props.setDisplay('');
    } else if (props.symbol === '%') {
      props.setDisplay(props.display / 100);
    } else if (props.symbol === '+/-'){
      props.setDisplay(props.display * -1);
    }
  }

  const handleOperator = (props) => {
    if (props.symbol === '+' || '-' || 'x' || '/' ) return props.setDisplay(props.display + props.value);
  }

  const handleCalculation = (props) => {
    if (props.value === '=') return setDisplay(eval(props.display));
  }

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
    <div className="background-image" style={ backgroundStyle }>
      <div className="back-container">
        <div className="main-container">
          <Logo />
          <Display total={display}/>
          <div className='buttons-container'>
            <div className="special-number">
              <Specials handleSpecialButton={handleSpecialButton} />
              <Numbers handleClick={handleClick} />
            </div>
            <div className="operators">
              <Operators handleCalculation={handleCalculation} handleOperator={handleOperator}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;