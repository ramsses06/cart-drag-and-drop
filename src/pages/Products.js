import React from 'react';
import { connect } from 'react-redux';
import * as productsActions from '../actions/productsActions';
import { Spinner, Row, Col } from 'react-bootstrap';

import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

import './css/Home.css';
import HeaderLayout from '../layouts/HeaderLayout';
import Product from '../components/Product';
import Cart from '../components/Cart';

class Products extends React.Component {
  async componentDidMount () {
    if (!this.props.productsReducer.products) {
      this.props.getProducts();
    }
  }

  addToCart (prod, index) {
    this.props.addCart(prod, index);
  }

  render () {
    console.log('Products -> props', this.props);
    const { products } = this.props.productsReducer;
    const { cart } = this.props.productsReducer;
    if (!products) {
      return (
        <HeaderLayout>
          <Spinner animation='border' />
        </HeaderLayout>
      );
    } else {
      return (
        <HeaderLayout history={this.props.history}>
          <DndProvider backend={Backend}>
            <Row>
              <Col as='div'>
                <Cart cart={cart} />
              </Col>
            </Row>
            <Row>
              {products.map((prod, index) => {
                return (
                  <Col key={prod.ID} xs={6} md={4}>
                    <Product prod={prod} index={index} onAddToCart={this.addToCart.bind(this)} />
                  </Col>
                );
              })}
            </Row>
          </DndProvider>
        </HeaderLayout>
      );
    }
  }
}

const mapStateToProps = ({ productsReducer }) => {
  return {
    productsReducer
  };
};

const mapDispatchToProps = {
  ...productsActions
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
