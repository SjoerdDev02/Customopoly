import styles from './Customizer_Modal.module.css';
import { useRef, useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import { useContext } from 'react';
import { GameContext } from '@/context/GameContext';
import useStoreImage from '@/hooks/useStoreImage';

function CustomizerModal({ table, index, data, onCustomizeClick }) {
    const portalElement = document.getElementById('portal');
    const modalRef = useRef(null);

    const gameContext = useContext(GameContext);
    const storeImage = useStoreImage();

    const [inputValues, setInputValues] = useState({
        name: data.name || '',
        color: data.color || '',
        image: data.image || ''
    });

    const handleBackdropClick = useCallback((event) => {
        if (modalRef.current && event.target === event.currentTarget) {
            onCustomizeClick('', 0, { name: '', color: '', image: '' });
        }
    }, [onCustomizeClick]);
    
    const handleInputChange = (event) => {
        const { name, value, type } = event.target;

        setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [name]: type === 'file' ? event.target.files[0] : value,
        }));
    };

    const handleChangeData = () => {
        const updatedGame = { ...gameContext.game };
        const changedItem = table !== 'game' && { ...updatedGame[table][index] };

        if (data.name !== inputValues.name) {
            if (table === 'game') {
                updatedGame.name = inputValues.name;
            } else {
                changedItem.name = inputValues.name;
                updatedGame[table][index] = changedItem;
            }
        }

        if (data.color !== inputValues.color) {
            const changedColors = { ...updatedGame['city_colors'] };

            if (table === 'bottom_data') {
                index <= 4 ? changedColors[0] = inputValues.color : changedColors[1] = inputValues.color;
            } else if (table === 'left_data') {
                index <= 4 ? changedColors[2] = inputValues.color : changedColors[3] = inputValues.color;
            } else if (table === 'top_data') {
                index <= 4 ? changedColors[4] = inputValues.color : changedColors[5] = inputValues.color;
            } else if (table === 'right_data') {
                index <= 4 ? changedColors[6] = inputValues.color : changedColors[7] = inputValues.color;
            } else if (table === 'square_data' || table === 'piece_data') {
                changedItem.color = inputValues.color; 
                updatedGame[table][index] = changedItem;
            } else if (table === 'game') {
                updatedGame.board_color = inputValues.color;
            }

            updatedGame['city_colors'] = changedColors;
        }

        if (data.image !== inputValues.image) {
            const image = inputValues.image;

            const uploadImage = async () => {
                const response = await storeImage(image);

                changedItem.image = `/storage/images/uploads/${response.filename}`;
                updatedGame[table][index] = changedItem;
            }

            uploadImage();
        }

        gameContext.setGame(updatedGame);

        onCustomizeClick('', 0, { name: '', color: '', image: '' });
    };

    return ReactDOM.createPortal(
        <div className={styles.backdrop} onClick={handleBackdropClick}>
            <div ref={modalRef} className={styles.modal}>
                <h1>Customizer</h1>
                <div>
                    {data.name && <input type='text' name='name' value={inputValues.name} onChange={handleInputChange} />}
                    {data.color && <input type='color' name='color' value={inputValues.color} onChange={handleInputChange} />}
                </div>
                {data.image && <div><img src={data.image.includes('/images') ? data.image : `/images/${data.image}`} alt='Dynamically loaded image' />
                <input type='file' name='image' onChange={handleInputChange} /></div>}
                <button className='btn' onClick={handleChangeData}>Change</button>
            </div>
        </div>,
        portalElement
    );
}

export default CustomizerModal;