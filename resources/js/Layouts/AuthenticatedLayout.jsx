import styles from './Layout.module.css';
import './style.css';
import Navigation from '@/Components/Navigation';

export default function Authenticated({ children, auth }) {
    return (
        <div className={styles.layout}>
          <Navigation user={auth.user} />
    
          <div className={styles.children}>{children}</div>
        </div>
      );
}