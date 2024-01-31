import Slider from '@/Components/Slider';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';
import styles from './styles/Welcome.module.css';

export default function Welcome() {
    return (
        <GuestLayout>
            <Head title="Discover" />
            <section className={styles.welcome}>
                <h1>Customopoly</h1>
                <h2>Create your own monopoly game in minutes</h2>
                <Slider />
                <Link className='btn' href={route('register')} as='button'>Start Now</Link>
            </section>
        </GuestLayout>
    );
}