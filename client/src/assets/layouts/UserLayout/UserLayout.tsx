import UserNavigation from './UserNavigation/UserNavigation';
import styles from './UserLayout.module.css';

const UserLayout = (children: React.ReactNode) => {
    return (
        <div className={styles.background}>
            <UserNavigation />
            <main role="main">{children}</main>
        </div>
    );
}

export default UserLayout;