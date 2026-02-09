import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("all");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className={isDarkMode ? "app dark-mode" : "app"}>
      <h1>🛒 Shopping App</h1>
      <p>Welcome! Your task is to implement filtering, cart management, and dark mode.</p>

      <DarkModeToggle
        isDarkMode={isDarkMode}
        onToggle={() => setIsDarkMode(!isDarkMode)}
      />

      <div style={{ margin: '20px 0' }}>
        <label>Filter by Category: </label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
          <option value="Vegetables">Vegetables</option>
        </select>
      </div>

      <ProductList
        selectedCategory={category}
        onAddToCart={addToCart}
      />

      <Cart cartItems={cart} />
    </div>
  )
}

export default App