import './style.css';
import styles from './Layout.module.css';
import Navigation from '@/Components/Navigation';

export default function Guest({ children }) {
    return (
        <div className={styles.layout}>
            <Navigation />

            <div className={styles.children}>{children}</div>
        </div>
    );
}