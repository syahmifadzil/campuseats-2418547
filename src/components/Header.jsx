import { NavLink } from 'react-router'
import { useCart } from '../hooks/useCart.js'

function Header() {
  const { cart } = useCart()

  const count = cart.reduce((sum, line) => sum + line.qty, 0)

  return (
    <header className="header">
      <NavLink to="/" className="logo-link">
        <h1 className="logo">CampusEats</h1>
      </NavLink>

      <nav className="nav">
        <NavLink to="/" end>Vendors</NavLink>
        <NavLink to="/orders">My Orders</NavLink>

        <NavLink to="/cart" className="cart">
          Cart <span className="badge">{count}</span>
        </NavLink>
      </nav>
    </header>
  )
}

export default Header