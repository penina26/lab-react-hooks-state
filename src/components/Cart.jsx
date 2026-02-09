import React from 'react'

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} is in your cart.
          </li>
        ))}
      </ul>
      {cartItems.length === 0 && <p>Your cart is currently empty.</p>}
    </div>
  )
}

export default Cart