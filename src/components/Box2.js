import { useState } from "react";
import "./Styles/Box2.css";
import imgData from "./imgData";
const Box2 = () => {
  const [img, setImg] = useState(0);
  const clickHandlerNext = () => {
    setImg(img === imgData.length - 1 ? 0 : img + 1);
  };
  const clickHandlerPrev = () => {
    setImg(img === 0 ? imgData.length - 1 : img - 1);
  };

  return (
    <div className="Box2">
      {" "}
      <button onClick={clickHandlerPrev}>prev</button>
      <img src={imgData[img]} alt="" />
      <button onClick={clickHandlerNext}>Next</button>
      <p>.</p>
    </div>
  );
};
export default Box2;
