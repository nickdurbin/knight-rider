import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButton from "../SpecialButtons/SpecialButton";

const Specials = (props) => {

  const [setSpecials] = useState(specials)

  return (
    <div className='specials-container'>
       {setSpecials.map((special, index) => {
         return <SpecialButton key={ index } symbol={ special } {...props} />
       })}
    </div>
  );
};

export default Specials;