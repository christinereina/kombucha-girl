import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditKombuchaForm(props){
  const { kombucha, onEditKombucha } = props;

  function handleEditKombuchaFormSubmission(event) {
    onEditKombucha({
      name: event.target.name.value, 
      brand: event.target.brand.value, 
      price: event.target.price.value, 
      flavor: event.target.flavor.value, 
      quantity: event.target.quantity.value, 
      id: kombucha.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
          formSubmissionHandler={handleEditKombuchaFormSubmission}
          buttonText='Update Kombucha'
          defaultName={kombucha.name}
          defaultBrand={kombucha.brand}
          defaultPrice={kombucha.price}
          defaultFlavor={kombucha.flavor}
          defaultQuantity={kombucha.quantity} />
  </React.Fragment>
  );
}

EditKombuchaForm.propTypes = {
  kombucha: PropTypes.object,
  onEditKombucha: PropTypes.func
};

export default EditKombuchaForm;
