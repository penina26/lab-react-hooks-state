import React from 'react'
import ProductCard from './ProductCard'

export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: true }, // Set to true for tests
  { id: 3, name: 'Banana', price: '$0.50', category: 'Fruits', inStock: true },
  { id: 4, name: 'Cheese', price: '$4.00', category: 'Dairy', inStock: true }
]

const ProductList = ({ selectedCategory, onAddToCart }) => {
  const filteredProducts = sampleProducts.filter((product) => {
    if (selectedCategory === "all") return true;
    return product.category === selectedCategory;
  });

  return (
    <div>
      <h2>Available Products</h2>
      <div className="product-list-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  )
}

export default ProductList