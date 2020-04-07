import React from 'react';
import { useDrop } from 'react-dnd';
import { FaCartPlus as CartIcon } from 'react-icons/fa';
import { Badge } from 'react-bootstrap';

const Cart = ({ cart }) => {
  const [ ev, drop ] = useDrop({
    accept: 'product',
    drop: () => ({ name: 'cart' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  return (
    <div ref={drop}>
      <div style={{ fontSize: '80px' }}>
        <Badge variant='info'>
          <CartIcon />{cart.length}
        </Badge>
      </div>
      <p>Arrastra tus productos</p>
    </div>
  );
};

export default Cart;
