import React from "react";
import { RxCircle, RxCross1, RxPencil1 } from "react-icons/rx";


const Icon = ({ thename }) => {
  switch (thename) {
    case "circle":
      return <RxCircle className="icons" />;
    case "cross":
      return <RxCross1 className="icons" />;
    default:
      return <RxPencil1 className="icons" />;
  }
};

export default Icon;
