import './style.css';
import styles from './Layout.module.css';
import Navigation from '@/Components/Navigation';

export default function Guest({ children }) {
    return (
        <div className={styles.layout}>
            <Navigation />

            <main role='main' className={styles.children}>{children}</main>
        </div>
    );
}