import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Board from '@/Components/Board/Board';
import { GameProvider } from '@/context/GameProvider';

const Customizer = ({ auth, game }) => {
    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Customizer" />

            <section>
                <GameProvider><Board game={game} /></GameProvider>
            </section>
        </AuthenticatedLayout>
    );
}

export default Customizer;