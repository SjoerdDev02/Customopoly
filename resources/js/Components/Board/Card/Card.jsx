import styles from './Card.module.css';

const string_nums = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

const Card = ({ side, number, name, price, base_price, bonus, city_color, image, onCustomizeClick }) => {
    let rotation = 0;

    const string_num = string_nums[number - 1];
    const grid_area = `card_${side.charAt(0)}_${string_num}`;

    const card_styles = {
        gridArea: grid_area,
        borderTop: side === 'top' ? 'none' : (side === 'bottom' ? '1px solid var(--black)' : '.5px solid var(--black)'),
        borderRight: side === 'right' ? 'none' : (side === 'left' ? '1px solid var(--black)' : '.5px solid var(--black)'),
        borderBottom: side === 'bottom' ? 'none' : (side === 'top' ? '1px solid var(--black)' : '.5px solid var(--black)'),
        borderLeft: side === 'left' ? 'none' : (side === 'right' ? '1px solid var(--black)' : '.5px solid var(--black)'),
    }

    const card_color_styles = {
        position: 'absolute',
        top: side === 'top' ? 'auto' : 0,
        right: side === 'right' ? 'auto' : 0,
        bottom: side === 'bottom' ? 'auto' : 0,
        left: side === 'left' ? 'auto' : 0,
        height: side === 'top' || side === 'bottom' ? '20%' : '100%',
        width: side === 'left' || side === 'right' ? '20%' : '100%',
        backgroundColor: city_color ? city_color : 'transparent',
    };

    const card_content_styles = {
        top: side === 'bottom' && city_color ? '10%' : 'auto',
        right: side === 'left' && city_color ? '10%' : 'auto',
        bottom: side === 'top' && city_color ? '10%' : 'auto',
        left: side === 'right' && city_color ? '10%' : 'auto',
    }
    
    if (side === 'left') {
        rotation = 90;
    } else if (side === 'top') {
        rotation = 180;
    } else if (side === 'right') {
        rotation = 270;
    }

    const handleCustomizeClick = (table, index, data) => {
        return (event) => {
            onCustomizeClick(table, index, data);
        };
    };

    return (
        <div className={styles.card} style={card_styles} onClick={handleCustomizeClick(`${side}_data`, number - 1, { name: name || '', color: city_color || '', image: image || '' })}>
            {city_color && <div style={card_color_styles}></div>}
            <div className={styles.content} style={{ ...card_content_styles, transform: `rotate(${rotation}deg)` }}>
                <p>{name}</p>
                {image && <img src={image.includes('/images') ? image : `/images/${image}`} alt='Dynamically loaded image' />}
                {price && <p>${bonus ? Math.round(base_price * price + base_price * 1/3) : Math.round(base_price * price)}</p>}
            </div>
        </div>
    );
}

export default Card;