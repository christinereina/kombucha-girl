import React from "react";
import PropTypes from "prop-types";

function Kombucha(props){
  return (
    <React.Fragment>
    <div onClick = {() => props.whenKombuchaClicked(props.id)}>
      <h1>{props.name}</h1>
      <h2>{props.brand}</h2>
      <h2>{props.price}</h2>
      <h2>{props.flavor}</h2>
    </div>
    </React.Fragment>
  );
}

Kombucha.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  flavor: PropTypes.string,
  id: PropTypes.string,
  whenKombuchaClicked: PropTypes.func
};

export default Kombucha;