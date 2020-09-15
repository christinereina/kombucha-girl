import React from "react";
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ReusableForm(props){
  return (
    <React.Fragment>
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={props.formSubmissionHandler}>
            <Form.Group>
              <Form.Control type='text' name='name' placeholder='Name' />
            </Form.Group>  
            <Form.Group>
              <Form.Control type='text' name='brand' placeholder='Brand' />
            </Form.Group>
            <Form.Group>  
              <Form.Control type='text' name='price' placeholder="Price" />
            </Form.Group>
            <Form.Group>
              <Form.Control type='text' name='flavor'placeholder="Flavor" />
            </Form.Group>
            <Form.Group>  
              <Form.Control type='number'name='quantity' placeholder="quantity" />
            </Form.Group>
            <Button variant='info' type='submit'>{props.buttonText}</Button>
          </Form>
        </Col>  
      </Row>
    </Container>    
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;