import React from 'react';
import Header from '../pages/Header';
import { Container } from 'react-bootstrap';

function HeaderLayout (props) {
  return (
    <>
      <Header {...props} />
      <Container fluid>
        {props.children}
      </Container>
    </>
  );
}

export default HeaderLayout;
