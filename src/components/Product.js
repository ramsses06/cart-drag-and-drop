import React from 'react';
import { useDrag } from 'react-dnd';
import { Card } from 'react-bootstrap';
import './css/Product.css';

const Product = ({ prod, onAddToCart, index }) => {
  const [ev, drag] = useDrag({
    item: { name: prod.NAME, type: 'product' },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        onAddToCart(prod, index);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  return (
    <Card ref={drag} >
      <Card.Img className='cardImage' variant='top' src={prod.IMAGE} />
      <Card.Body>
        <Card.Title>{prod.NAME}</Card.Title>
        <Card.Text>
          {prod.DESCRIPTION}
        </Card.Text>
        <Card.Text>
          <small>precio: ${prod.PRICE}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
