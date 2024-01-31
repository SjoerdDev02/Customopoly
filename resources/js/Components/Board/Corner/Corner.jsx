import styles from './Corner.module.css';

const string_nums = ['one', 'two', 'three', 'four'];

const Corner = ({ number, name, image, onCustomizeClick }) => {
    let rotation = -135;

    const string_num = string_nums[number - 1];
    const grid_area = `corner_${string_num}`;

    const corner_styles = {
        gridArea: grid_area,
        borderTop: number === 1 || number === 2 ? '.5px solid var(--black)' : 'none',
        borderLeft: number === 1 || number === 4 ? '.5px solid var(--black)' : 'none',
        borderRight: number === 2 || number === 3 ? '.5px solid var(--black)' : 'none',
        borderBottom: number === 3 || number === 4 ? '.5px solid var(--black)' : 'none',
    }
    
    if (number === 1) {
        rotation = -45;
    } else if (number === 2) {
        rotation = 45;
    } else if (number === 3) {
        rotation = 135;
    }

    const handleCustomizeClick = (table, index, data) => {
        return (event) => {
            onCustomizeClick(table, index, data);
        };
    };

    return (
        <div className={styles.corner} style={corner_styles} onClick={handleCustomizeClick('corner_data', number - 1, { name: name, color: '', image: image })}>
            <div className={styles.content} style={{ transform: `rotate(${rotation}deg)` }}>
                <h6>{name.split(' ')[0]}</h6>

                {number !== 2 && <img src={image.includes('/images') ? image : `/images/${image}`} alt='Dynamically loaded image' />}
                {number === 2 && <div className={styles.prison}><div></div><div></div><div></div><div></div><div></div><img src={image.includes('/images') ? image : `/images/${image}`} alt='Dynamically loaded image' /></div>}

                <h6>{name.split(' ')[1]}</h6>
            </div>
        </div>
    );
}

export default Corner;