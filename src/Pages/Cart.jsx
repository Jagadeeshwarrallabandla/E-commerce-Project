import React, { useContext } from 'react';
import { CartContext } from '../AddProduct/AddtoCart'; // Ensure correct path to CartContext
import './Cart.css';

const Cart = () => {
  const { cartItems, incrementQuantity, decrementQuantity, removeFromCart } = useContext(CartContext);

  // Calculate the total price of the cart
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className='cart-container'>
      <div className='cart-items'>
        {cartItems.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className='cart-item'>
              <img src={item.imgUrl} alt={item.productName} className='item-image' />
              <div className='item-details'>
                <h5>{item.productName}</h5>
                <p>₹{item.price}</p>
                <p className='rating'>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
              </div>
              <div className='quantity'>
                <button className='quantity-btn' onClick={() => decrementQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button className='quantity-btn' onClick={() => incrementQuantity(item.id)}>+</button>
              </div>
              <button className='remove-item' onClick={() => removeFromCart(item.id)}>×</button>
            </div>
          ))
        )}
      </div>
      <div className='cart-summary'>
        <h3>Cart Summary</h3>
        <p>Total Price: ₹{totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
