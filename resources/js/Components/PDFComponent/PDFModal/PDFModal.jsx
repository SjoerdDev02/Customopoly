import styles from './PDFModal.module.css';
import { useRef, useCallback, useEffect, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFComponent from '../PDFComponent';
import { GameContext } from '@/context/GameContext';
import axios from 'axios';

function PDFModal({ onModalClick, gameId }) {
    const [initGame, setInitGame] = useState(false);
    const portalElement = document.getElementById('portal');
    const modalRef = useRef(null);

    const handleBackdropClick = useCallback((event) => {
        if (modalRef.current && event.target === event.currentTarget) {
            onModalClick();
        }
    }, [onModalClick]);

    const gameContext = useContext(GameContext);

    useEffect(() => {
        const fetchDataForPrinting = async () => {
            try {
              const response = await axios.get(route('games.show', { id: gameId }));
              gameContext.formatGameData(response.data.game);
        
              setTimeout(() => {
                setInitGame(true);
              }, 100);
            } catch (error) {
              console.error('Error fetching game data:', error);
            }
          };

          fetchDataForPrinting();
    }, []);

    return ReactDOM.createPortal(
        <div className={styles.backdrop} onClick={handleBackdropClick}>
            <div ref={modalRef} className={styles.modal}>
                <h1>PDFModal</h1>
                {initGame && <PDFDownloadLink
                      className='btn'
                      document={<PDFComponent game={gameContext.game} />}
                      fileName='customopoly.pdf'
                    >
                      {({ blob, url, loading, error }) =>
                        loading ? 'Loading document...' : 'Download PDF'
                      }
                </PDFDownloadLink>}
            </div>
        </div>,
        portalElement
    );
}

export default PDFModal;