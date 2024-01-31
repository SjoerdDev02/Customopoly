import React from 'react';
import styles from './General.module.css';
import { useContext } from 'react';
import { GameContext } from '@/context/GameContext';

const General = ({ name, board_color, pieces, city, color, base_price, onCustomizeClick, onUpdateGame }) => {
    const gameContext = useContext(GameContext);

    const handleCustomizeClick = (table, index, data) => {
        return (event) => {
            onCustomizeClick(table, index, data);
        };
    };

    return (
        <div className={styles.general}>
            <header onClick={handleCustomizeClick('game', 0, { name: name, color: board_color, image: '' })}>
                <h2>{ name }</h2>
                <div style={{ backgroundColor: board_color }}><img src='/icons/board_color_icon.svg' alt='Board color icon' /></div>
            </header>
            <div className={styles.base_price}>
                <label htmlFor="base_price">Lowest Price</label>
                <input
                    type="range"
                    id="base_price"
                    name="base_price"
                    min="50"
                    max="1000"
                    value={base_price}
                    step="10"
                    onChange={(e) => {
                        gameContext.setGame((prevGame) => ({
                            ...prevGame,
                            base_price: e.target.value
                        }));
                    }}
                />
            </div>
            <div className={styles.pieces}>
                {pieces.map((piece, index) => (
                    <article key={index} style={{ backgroundColor: piece.color }} onClick={handleCustomizeClick('piece_data', index, { name: '', color: piece.color, image: piece.image })}><img src={piece.image.includes('/images') ? piece.image : `/images/${piece.image}`} alt='Dynamically loaded image' /></article>
                ))}
            </div>
            <article className={styles.example_card}>
                <h3 style={{ backgroundColor: color }}>{city}</h3>
                <h6>Rent ${base_price * 1}</h6>
                <div>
                    <div>
                        <p>1 House</p>
                        <p>${base_price * 5}</p>
                    </div>
                    <div>
                        <p>2 Houses</p>
                        <p>${base_price * 10}</p>
                    </div>
                    <div>
                        <p>3 Houses</p>
                        <p>${base_price * 15}</p>
                    </div>
                    <div>
                        <p>4 Houses</p>
                        <p>${base_price * 20}</p>
                    </div>
                    <div>
                        <p>Hotel</p>
                        <p>${base_price * 25}</p>
                    </div>
                </div>
                <h6>Mortgage value ${base_price * 5}</h6>
                <p>Houses cost ${base_price * 5} each</p>
                <p>Hotel cost ${base_price * 5}</p>
            </article>
            <button className='btn' onClick={onUpdateGame}>Save</button>
        </div>
    );
}

export default General;