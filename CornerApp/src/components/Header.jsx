import './Header.css';

function Header({ storeName, cartCount }) {
  return (
    <header className="app-header">
      <h1 className="store-name">{storeName}</h1>
      <nav className="nav-menu">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">Search</a>
        <a href="#" className="nav-link">Category</a>

        <div className="cart-container">
          <a href="#" className="nav-link">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{cartCount}</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
