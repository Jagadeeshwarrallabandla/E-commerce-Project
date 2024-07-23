// import React, { createContext, useState } from 'react';


// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find(item => item.id === product.id);
//       if (existingItem) {
//         // Update quantity if product exists
//         return prevItems.map(item =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       // Add new product with quantity 1 if not exists
//       return [...prevItems, { ...product, quantity: 1 }];
//     });
//   };

//   const incrementQuantity = (id) => {
//     setCartItems((prevItems) =>
//       prevItems.map(item =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   const decrementQuantity = (id) => {
//     setCartItems((prevItems) =>
//       prevItems.map(item =>
//         item.id === id
//           ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
//           : item
//       )
//     );
//   };

//   const getCartCount = () => cartItems.reduce((acc, item) => acc + item.quantity, 0);

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, incrementQuantity, decrementQuantity, getCartCount }}>
      
//       {children}
//     </CartContext.Provider>
//   );
// };
import React, { createContext, useState } from 'react';

import Notification from '../Message/Notification'; 

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState({ message: '', visible: false });

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      setNotification({ message: 'The Product is added Successfully to Cart', visible: true });
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const incrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const getCartCount = () => cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleCloseNotification = () => {
    setNotification({ ...notification, visible: false });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, incrementQuantity, decrementQuantity, getCartCount }}>
      
      <Notification message={notification.message} visible={notification.visible} onClose={handleCloseNotification} />
      {children}
    </CartContext.Provider>
  );
};


