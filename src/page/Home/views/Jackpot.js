import React, { useState, useEffect } from "react";
import Odometer from "react-odometerjs";

import "./Jackpot.scss";
const Jackpot = () => {
  const [odometerValue, setValue] = useState(152546876);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue(odometerValue + 50);
    }, 3000);
    return () => clearInterval(interval);
  }, [odometerValue]);

  return (
    <section className="jackpot">
      <div className='meter'>
        <span className='dollar'>$</span>
        <Odometer format="ddd,ddd,ddd" duration={3000} value={odometerValue} />
      </div>
    </section>
  );
};

export default Jackpot;
