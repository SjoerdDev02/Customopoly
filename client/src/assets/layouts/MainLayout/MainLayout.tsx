import Footer from './Footer/Footer';
import styles from './MainLayout.module.css';
import MainNavigation from './MainNavigation/MainNavigation';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.main_layout}>
            <MainNavigation />
            <main role="main">{children}</main>
            <Footer />
        </div>
    );
}

export default MainLayout;