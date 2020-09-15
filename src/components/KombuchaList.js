import React from "react";
import Kombucha from "./Kombucha";
import PropTypes from "prop-types";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function KombuchaList(props){

  return (
  <React.Fragment> 
    <Container>
    <Row>
      <Col xs={{ order: 'first' }}>
          {props.kombuchaList.map((kombucha) =>
            <Kombucha
              whenKombuchaClicked = { props.onKombuchaSelection }
              name={kombucha.name}
              brand={kombucha.brand}
              price={kombucha.price}
              flavor={kombucha.flavor}
              quantity={kombucha.quantity}
              id={kombucha.id}
              key={kombucha.id}/>
            )}
        </Col>  
      </Row>
    </Container> 
  </React.Fragment>
  );
}

 KombuchaList.propTypes = {
    kombuchaList: PropTypes.array,
    onKombuchaSelection: PropTypes.func
  };

export default KombuchaList;