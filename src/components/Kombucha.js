import React from "react";
import PropTypes from "prop-types";

function Kombucha(props){
  
  return (
    <React.Fragment>
    <div onClick ={() => props.whenKombuchaClicked(props.id)}>
      <h1 style={{color: "pink"}}>{props.name}</h1>
      <h3> Available Litre(s): {props.quantity}</h3>
      <hr/>
    </div>
    </React.Fragment>
  );
}

Kombucha.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  flavor: PropTypes.string,
  quantity: PropTypes.string,
  id: PropTypes.string,
  whenKombuchaClicked: PropTypes.func
};

export default Kombucha;