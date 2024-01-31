import styles from './Board.module.css';
import Card from './Card/Card';
import Corner from './Corner/Corner';
import Square from './Square/Square';
import CustomizerModal from '../Modal/Customizer_Modal';
import { useContext } from 'react';
import { GameContext } from '@/context/GameContext';
import { useState, useEffect } from 'react';
import useUpdateGame from '@/hooks/useUpdateGame';
import useFormatUpdatedGame from '@/hooks/useFormatUpdatedGame';
import General from './General/General';
import { router } from '@inertiajs/react';

const Board = ({ game }) => {
    const [modal, setModal] = useState({ show: false, table: '', index: 0, data: { name: '', color: '', image: '' } });
    const [updatingError, setUpdatingError] = useState(false);

    const gameContext = useContext(GameContext);
    const data = gameContext.game;
    const updateGame = useUpdateGame();

    const handleCustomizeClick = (table, index, data) => {
        setModal((prevState) => ({
            show: !prevState.show,
            table: table,
            index: index,
            data: data,
        }));
    }
    
    const handleUpdateGame = async () => {
        const updatedGame = await useFormatUpdatedGame({ updatedGame: { ...game }, data });
        const response = await updateGame(updatedGame);
    
        if (response.response && response.response.status === 422 || response.status && response.status === 500) {
            setUpdatingError(true);
        } else {
            router.get(route('games.index', { id: game.user_id }));
        }
    }

    useEffect(() => {
        gameContext.formatGameData(game);
    }, []);

    const check = data && 'name' in data && 'square_data' in data && 'corner_data' in data && 'top_data' in data && 'left_data' in data && 'right_data' in data && 'bottom_data' in data;

    return (
        <>
            {updatingError && <p>Saving the game went wrong. Please make sure all names are set with values of a maximum of 15 characters and 2 words</p>}
            {check ? <section className={styles.customizer}>
                        <General
                            name={data.name}
                            board_color={data.board_color}
                            pieces={data.piece_data}
                            city={data.right_data[0].name}
                            base_price={data.base_price}
                            color={data.city_colors[data.right_data[0].color - 1]}
                            onCustomizeClick={(table, index, data) => handleCustomizeClick(table, index, data)}
                            onUpdateGame={handleUpdateGame}
                        />
                        <article className={styles.board} style={{ backgroundColor: data.board_color }}>
                            {data.corner_data.map((corner, index) => (
                                <Corner
                                    key={`corner_${index}`}
                                    number={corner.id}
                                    name={corner.name}
                                    image={corner.image}
                                    onCustomizeClick={(table, index, data) => handleCustomizeClick(table, index, data)}
                                />
                            ))}

                            {data.top_data.map((data_item, index) => (
                                <Card
                                    key={`top_${index}`}
                                    side='top'
                                    number={data_item.id}
                                    name={data_item.name}
                                    price={data_item.price || null}
                                    base_price={data.base_price}
                                    bonus={data_item.bonus || null}
                                    city_color={data_item.color ? data.city_colors[data_item.color - 1] : null}
                                    image={data_item.image ? data_item.image : null}
                                    onCustomizeClick={(table, index, data) => handleCustomizeClick(table, index, data)}
                                />
                            ))}

                            {data.left_data.map((data_item, index) => (
                                <Card
                                    key={`left_${index}`}
                                    side='left'
                                    number={data_item.id}
                                    name={data_item.name}
                                    price={data_item.price || null}
                                    base_price={data.base_price}
                                    bonus={data_item.bonus || null}
                                    city_color={data_item.color ? data.city_colors[data_item.color - 1] : null}
                                    image={data_item.image ? data_item.image : null}
                                    onCustomizeClick={(table, index, data) => handleCustomizeClick(table, index, data)}
                                />
                            ))}

                            <Square
                                square_data={data.square_data}
                                onCustomizeClick={(table, index, data) => handleCustomizeClick(table, index, data)}
                            />

                            {data.right_data.map((data_item, index) => (
                                <Card
                                    key={`right_${index}`}
                                    side='right'
                                    number={data_item.id}
                                    name={data_item.name}
                                    price={data_item.price || null}
                                    base_price={data.base_price}
                                    bonus={data_item.bonus || null}
                                    city_color={data_item.color ? data.city_colors[data_item.color - 1] : null}
                                    image={data_item.image ? data_item.image : null}
                                    onCustomizeClick={(table, index, data) => handleCustomizeClick(table, index, data)}
                                />
                            ))}

                            {data.bottom_data.map((data_item, index) => (
                                <Card
                                    key={`bottom_${index}`}
                                    side='bottom'
                                    number={data_item.id}
                                    name={data_item.name}
                                    price={data_item.price || null}
                                    base_price={data.base_price}
                                    bonus={data_item.bonus || null}
                                    city_color={data_item.color ? data.city_colors[data_item.color - 1] : null}
                                    image={data_item.image ? data_item.image : null}
                                    onCustomizeClick={(table, index, data) => handleCustomizeClick(table, index, data)}
                                />
                            ))}
                    </article>
                </section>
            : <div>Loading...</div>}
            {modal.show && <CustomizerModal table={modal.table} index={modal.index} data={modal.data} onCustomizeClick={handleCustomizeClick} />}
        </>
    );
}

export default Board;