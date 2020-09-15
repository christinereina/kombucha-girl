import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function KombuchaDetails(props){
  const { kombucha, onClickingDelete, onClickingPurchase} = props;

  return (
    <React.Fragment>
      <Container>
        <Row>
      <Col md={8}>
      <h2>{kombucha.name} Details</h2>
      <h2>{kombucha.brand}</h2>
      <h2>{kombucha.price}</h2>
      <h2>{kombucha.flavor}</h2>
      <h2>{kombucha.quantity}</h2>
      <Button onClick={() => onClickingPurchase(kombucha.id)}>Purchase</Button>
      <Button onClick={ props.onClickingEdit }>Edit</Button>
      <Button onClick={() => onClickingDelete(kombucha.id)}>Delete</Button>
      <hr/>
      </Col>  
      </Row>
    </Container> 
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