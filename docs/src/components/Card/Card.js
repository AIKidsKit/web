import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
//REQUIRES  npm install --save reactstrap bootstrap@4
import { Button } from "react-bootstrap";


 
const Card = ({ item }) => {            
           // destructuring props
  return (
    <>
      {/* <div className="container-fluid"> */}
        <div className="row justify-content-center text-center">
          {item.map((Val) => {
            return (
              <div
              className="col-md-4 col-sm-6 card my-3 py-3 border-0"
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
                  <br />
                  <Button href={Val.website}>Visit</Button>
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
