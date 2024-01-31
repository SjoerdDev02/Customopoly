import Slider from '@/Components/Slider';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';
import styles from './styles/Welcome.module.css';

export default function Welcome() {
    return (
        <GuestLayout>
            <Head title="Discover" />
            <section className={styles.welcome}>
                <div>
                    <div>
                        <h1>Design Your Personalized Monopoly Game in Minutes</h1>
                        <h2>Customopoly empowers you to craft your unique Monopoly game, complete with custom street names, images, colors, pawns, and more.</h2>
                    </div>
                    <Link className='btn' href={route('register')} as='button'>Start Now</Link>
                </div>
                <Slider />
            </section>
        </GuestLayout>
    );
}