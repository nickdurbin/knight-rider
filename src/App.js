import React, { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import "./App.css";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props =>
    props.theme.mode === 'dark' ? '#111' : '#EEE'};
  color: ${props =>
    props.theme.mode === 'dark' ? '#EEE' : '#111'};
}

.back-container {
  background-color: ${props =>
    props.theme.mode === 'dark' ? '#111' : '#131a1a'};
  color: ${props =>
    props.theme.mode === 'dark' ? '#EEE' : '#111'};
  border-color: ${props =>
    props.theme.mode === 'dark' ? '#EEE' : '#131a1a'};
}

.main-container {
  background-color: ${props =>
    props.theme.mode === 'dark' ? '#111' : 'darkred'};
  color: ${props =>
    props.theme.mode === 'dark' ? '#EEE' : '#111'};
  border-color: ${props =>
    props.theme.mode === 'dark' ? '#EEE' : 'gray'};
}

.logo {
  display: ${props =>
    props.theme.mode === 'dark' ? 'none' : ''};
}

.kit {
  display: ${props =>
    props.theme.mode === 'dark' ? 'block' : ''};
}

.display {
  background-color: ${props =>
    props.theme.mode === 'dark' ? 'white' : '#131a1a'};
  color: ${props =>
    props.theme.mode === 'dark' ? '#EEE' : '#111'};
  border: ${props =>
    props.theme.mode === 'dark' ? '' : 'none'};
  animation: ${props =>
    props.theme.mode === 'dark' ? '' : 'none'};
}

.displayDigit {
  color: ${props =>
    props.theme.mode === 'dark' ? 'red' : '#EEE'};
}

.number-button {
  background-color: ${props =>
    props.theme.mode === 'dark' ? '#111' : '#1111b1'};
  color: ${props =>
    props.theme.mode === 'dark' ? 'red' : 'white'};
  animation: ${props =>
    props.theme.mode === 'dark' ? '' : 'none'};
}

.special-button {
  background-color: ${props =>
    props.theme.mode === 'dark' ? '#111' : '#0070bbb6'};
  color: ${props =>
    props.theme.mode === 'dark' ? 'red' : 'white'};
  animation: ${props =>
    props.theme.mode === 'dark' ? '' : 'none'};
}

.operator-button {
  background-color: ${props =>
    props.theme.mode === 'dark' ? '#111' : '#3195f3'};
  color: ${props =>
    props.theme.mode === 'dark' ? 'red' : 'white'};
  animation: ${props =>
    props.theme.mode === 'dark' ? '' : 'none'};
}

.zero-button {
  background-color: ${props =>
    props.theme.mode === 'dark' ? 'white' : '#1111b1'};
  color: ${props =>
    props.theme.mode === 'dark' ? 'red' : 'white'};
  animation: ${props =>
    props.theme.mode === 'dark' ? '' : 'none'};
}`;

function App() {

  const [theme, setTheme] = useState({ mode: 'light' });

  const [display, setDisplay] = useState('');

  function handleClick(symbol) {
    return setDisplay(display + symbol);
  }

  function handleSpecialButton(symbol) {
    if (symbol === 'C') {
      setDisplay('');
    } else if (symbol === '%') {
      setDisplay(display / 100);
    } else if (symbol === '+/-'){
      setDisplay(display * -1);
    }
  }

  function handleOperator(symbol, value) {
    if (symbol === '+' || '-' || 'x' || '/' ) 
    return setDisplay(display + value);
  }

  function handleCalculation(value) {
    if (value === '=') 
    return setDisplay(eval(display));
  }

  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyle />
        <div className="back-container">
          <div className="main-container">
            <h1 className='kit' onClick={() => setTheme(theme.mode === 'dark' ? {mode: 'light'} : {mode: 'dark'})}>
              <span>T</span>
              <span>H</span>
              <span>E</span> 
              <span>H</span>
              <span>O</span>
              <span>F</span>
              <span>F</span>
            </h1>
            <Logo setTheme={setTheme} theme={theme}/>
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
    </>
    </ThemeProvider>
  );
}

export default App;