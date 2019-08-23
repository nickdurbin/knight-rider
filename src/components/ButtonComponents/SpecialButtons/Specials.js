import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButton from "../SpecialButtons/SpecialButton";

const Specials = () => {

  const [setSpecials] = useState(specials)

  return (
    <div className='specials-container'>
       {setSpecials.map((special, index) => {
         return <SpecialButton key={ index } symbol={ special } />
       })}
    </div>
  );
};

export default Specials;