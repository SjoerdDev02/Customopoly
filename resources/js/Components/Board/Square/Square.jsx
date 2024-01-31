import styles from './Square.module.css';

const Square = ({ square_data, onCustomizeClick }) => {
    const board_styles = {
        gridArea: 'square',
    }

    const handleCustomizeClick = (table, index, data) => {
        return (event) => {
            onCustomizeClick(table, index, data);
        };
    };

    return (
        <div className={styles.square} style={board_styles}>
            <div className={styles.square_content}>
                <div onClick={handleCustomizeClick('square_data', 0, { name: '', color: square_data[0].color, image: square_data[0].image })}><div style={{ backgroundColor: square_data[0].color, transform: 'rotate(180deg)' }}><img src={square_data[0].image.includes('/images') ? square_data[0].image : `/images/${square_data[0].image}`} /></div></div>

                <h1 onClick={handleCustomizeClick('square_data', 1, { name: '', color: square_data[1].color, image: square_data[1].image })} style={{ backgroundColor: square_data[1].color }}>Cust<span><img src={square_data[1].image.includes('/images') ? square_data[1].image : `/images/${square_data[1].image}`} /></span>mopoly</h1>

                <div onClick={handleCustomizeClick('square_data', 2, { name: '', color: square_data[2].color, image: square_data[2].image })}><div style={{ backgroundColor: square_data[2].color }}><img src={square_data[2].image.includes('/images') ? square_data[2].image : `/images/${square_data[2].image}`} /></div></div>
            </div>
        </div>
    );
}

export default Square;