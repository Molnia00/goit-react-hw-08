import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.headerContainer}>
            <nav className={s.navigation}>
          <NavLink to="/" className={s.navLink}>
          Home
        </NavLink>
        <NavLink to="/login" className={s.navLink}>
          Login
        </NavLink>
        <NavLink to="/register" className={s.navLink}>
          Register
                </NavLink>
                <NavLink to="/cont" className={s.navLink}>
          Contact
                </NavLink>
                

      </nav>
        </div>
    )
}


export default Header