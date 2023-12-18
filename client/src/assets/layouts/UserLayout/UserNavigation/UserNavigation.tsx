import styles from './UserNavigation.module.css';
import { NavLink } from 'react-router-dom';

const UserNavigation = () => {
    return (
        <nav role="navigation" className={styles.nav}>
            <NavLink aria-label="Dashboard" to='/dashboard' className={`${styles.navItem}`}><img src='/icons/navigation/user_icon.svg' alt='User icon' /></NavLink>
            <NavLink aria-label="Customizer" to='/customizer' className={`${styles.navItem}`}><img src='/icons/navigation/create_icon.svg' alt='Customizer icon' /></NavLink>
            <NavLink aria-label="Logout" to='/logout' className={`${styles.navItem}`}><img src='/icons/navigation/logout_icon.svg' alt='Logout icon' /></NavLink>
        </nav>
    );
}

export default UserNavigation;