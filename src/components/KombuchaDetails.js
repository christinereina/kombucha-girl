import React from "react";
import PropTypes from "prop-types";

function KombuchaDetails(props){
  const { kombucha, onClickingDelete, onClickingPurchase} = props;

  return (
    <React.Fragment>
      <h1>Kombucha Details</h1>
      <h2>{kombucha.name}</h2>
      <h2>{kombucha.brand}</h2>
      <h2>{kombucha.price}</h2>
      <h2>{kombucha.flavor}</h2>
      <button onClick={() => onClickingPurchase(kombucha.id)}>Purchase</button>
      <button onClick={ props.onClickingEdit }>Edit</button>
      <button onClick={() => onClickingDelete(kombucha.id)}>Delete</button>
      <hr/>
    </React.Fragment>
  );
}

KombuchaDetails.propTypes = {
  kombucha: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingPurchase: PropTypes.func,
};

export default KombuchaDetails;