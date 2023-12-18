import styles from './MainNavigation.module.css';
import { NavLink, useLocation } from "react-router-dom";

const MainNavigation = () => {
    const location = useLocation();

    return (
        <nav className={styles.navigation}>
            <NavLink to='/' aria-label="Home" className={styles.navLogo}><h1>Customopoly</h1></NavLink>
            <div>
                <NavLink to='/login' className={`${styles.navItem} ${location.pathname === '/login' && styles.active}`}>Login</NavLink>
                <NavLink to='/register' className={`${styles.navItem} ${location.pathname === '/register' && styles.active}`}>Register</NavLink>
            </div>
        </nav>
    );
}

export default MainNavigation;