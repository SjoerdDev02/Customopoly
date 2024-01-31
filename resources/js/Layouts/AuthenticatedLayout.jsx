import styles from './Layout.module.css';
import './style.css';
import Navigation from '@/Components/Navigation';

export default function Authenticated({ children, auth }) {
    return (
        <div className={styles.layout}>
          <Navigation user={auth.user} />
    
          <main role='main' className={styles.children}>{children}</main>
        </div>
      );
}