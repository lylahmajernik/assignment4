import './App.css'
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CartItem from './components/CartItem';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Wireless Headphones", price: 99.99, image: "https://placehold.co/600x400", description: "Premium noise-cancelling headphones with 30-hour battery life" },
    { id: 2, name: "Smart Watch", price: 249.99, image: "https://placehold.co/600x400", description: "Fitness tracker with heart rate monitor and GPS" },
    { id: 3, name: "Bluetooth Speaker", price: 79.99, image: "https://placehold.co/600x400", description: "Portable waterproof speaker with 360-degree sound" },
    { id: 4, name: "Laptop Stand", price: 49.99, image: "https://placehold.co/600x400", description: "Ergonomic aluminum stand for laptops and tablets" },
    { id: 5, name: "Webcam", price: 129.99, image: "https://placehold.co/600x400", description: "4K webcam with auto-focus and noise reduction" },
    { id: 6, name: "Mechanical Keyboard", price: 159.99, image: "https://placehold.co/600x400", description: "RGB backlit keyboard with custom switches" }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log(`${product.name} added to cart`);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="app">
      <Header storeName="Component Corner" cartCount={cart.length} />
      <Hero
        title="Welcome to Component Corner"
        subtitle="Find the best components for your next project."
        ctaText="Shop Now"
        image="https://placehold.co/1200x400/667eea/ffffff?text=Shop+Electronics"
      />

      <main>
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            info={product.description}
            onAddToCart={() => addToCart(product)}
          />
        ))}

        {cart.length > 0 && (
          <div className="cart-list">
            <h2>Your Cart</h2>
            {cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeFromCart}
              />
            ))}
          </div>
        )}
      </main>

      <Footer
        storeName="Component Corner"
        address="123 Main Street, Pittsburgh, PA"
        email="info@componentcorner.com"
        phone="(123) 456-7890"
      />
    </div>
  );
}

export default App;