import React, { useContext } from 'react';
import { CartContext } from '../AddProduct/AddtoCart'; // Ensure correct path to CartContext
import './Cart.css';

const Cart = () => {
  const { cartItems, incrementQuantity, decrementQuantity } = useContext(CartContext);

  return (
    <div className='cart'>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id} className='cart-item'>
              <img src={item.imgUrl} alt={item.productName} width="50" />
              <span>{item.productName}</span>
              <span>₹{item.price}</span>
              <span className='rating'>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <div className='quantity'>
                <button onClick={() => decrementQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementQuantity(item.id)}>+</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
