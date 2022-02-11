import React from "react";

// Terrible, terrible idea but at least the styles aren't clashing anymore
import '../../../src/css/bootstrap/scss/bootstrap.scss'

//REQUIRES  npm install --save reactstrap bootstrap@4
import { Card, Button } from "reactstrap";



const CardItem = ({ item }) => {            
           // destructuring props
  return (
    <>
      {/* <div className="container-fluid"> */}
        <div className="row justify-content-center text-center local-bootstrap">
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
                  {/* <div className="card-text">{Val.tags}</div> */}
                  <br />

                   <div class="d-grid gap-2 d-md-flex">
                  {
                    Val.tags.map(function(tag){
                    return <Button href={tag} class="btn-sm"> {tag}</Button>
                    })
                }
                </div>
                </div>
              </div>
            );
          })}
        </div>
      {/* </div> */}
    </>
  );
};
 
export default CardItem;
