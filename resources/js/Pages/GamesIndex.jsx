import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import styles from './styles/Dashboard.module.css';
import { useState } from 'react';
import PDFModal from '@/Components/PDFComponent/PDFModal/PDFModal';
import { GameProvider } from '@/context/GameProvider';

const GamesIndex = ({ auth, games }) => {
  const [modal, setModal] = useState(false);
  const [gameId, setGameId] = useState(null);

  const handlePrint = async (id) => {
    setGameId(id);
    setTimeout(() => {
      setModal(true);
    }, 100);
  };

  return (
    <AuthenticatedLayout auth={auth}>
      <Head title="Dashboard" />

      <section className={styles.dashboard}>
        {games && games.length ? (
          <table className={styles.dashboard_games}>
            <tbody>
              {games.map((game) => (
                <tr key={game.id}>
                  <td><h2>{game.name}</h2></td>
                  <td><h2>{game.created_at.split('T')[0]}</h2></td>
                  <td>
                    <button className='btn' onClick={() => handlePrint(game.id)}>
                        Print Game
                    </button>
                  </td>
                  <td>
                    <Link className='btn' href={route('games.edit', { id: game.id })} as='button'>
                      <img src='/icons/edit_icon.svg' alt='Edit icon' />
                    </Link>
                  </td>
                  <td>
                    <Link className='btn' href={route('games.delete', { id: game.id })} method='delete' as='button'>
                      <img src='/icons/delete_icon.svg' alt='Delete icon' />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No games created yet</p>
        )}
      </section>
      {modal && <GameProvider><PDFModal onModalClick={() => setModal(false)} gameId={gameId} /></GameProvider>}
    </AuthenticatedLayout>
  );
};

export default GamesIndex;