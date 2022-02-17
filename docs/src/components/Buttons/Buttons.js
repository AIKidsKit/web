import React from "react";
import Data, { Tags } from '../../data/resources'; 

const Buttons = ({ filterItem, setItem, tagItems }) => {
  return (
    <>
      <div className="d-flex justify-content-center local-bootstrap">
        {tagItems.map((Val, id) => {
          return (
            <button
              className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
        <button
          className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
          onClick={() => setItem(Data)}
        >
          all
        </button> 
       </div>
    </>
  );
};
 
export default Buttons;