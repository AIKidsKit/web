import React from "react";

 
const Card = ({ item }) => {            
           // destructuring props
  return (
    <>
      {/* <div className="container-fluid"> */}
        <div className="row justify-content-center">
          {item.map((Val) => {
            return (
              <div
                className="col-sm-4  card"
                key={Val.id}
              >
                <div className="card-img-top text-center">
                  <img src={Val.img} alt={Val.title} className="card-img-top" />
                </div>
                <div className="card-body">
                  <div className="card-title fw-bold fs-4">
                    <a href={Val.website}>{Val.title}</a>
                  </div>
                  <div className="card-text">{Val.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      {/* </div> */}
    </>
  );
};
 
export default Card;
