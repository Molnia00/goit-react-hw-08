import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoggedIn, selectUser } from '../../redux/auth/selectors'
import { logout } from '../../redux/auth/operations';

function Header() {
    
    const isLoggedIn = useSelector(selectLoggedIn);
    const usersLog = useSelector(selectUser);
    const dispatch = useDispatch();
    return (
        <div className={s.headerContainer}>
            
            <nav className={s.navigation}>
          <NavLink to="/" className={s.navLink}>
          Home
        </NavLink>
        
                {isLoggedIn ?
                    <>
                    <h2 className={s.navLink}>Welcome,{usersLog.name}</h2>
                    
                    <NavLink to="/contacts" className={s.navLink}>
                        Contacts list
                    </NavLink>
                    <button onClick={() => dispatch(logout())} className={s.btnLogOut} >Logout </button>
                </>
                    : 
                <>
        <NavLink to="/login" className={s.navLink}>
          Login
        </NavLink>
        <NavLink to="/register" className={s.navLink}>
          Register
        </NavLink>
                    </>
        }

      </nav>
        </div>
    )
}


export default Header