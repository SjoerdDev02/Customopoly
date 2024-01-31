import axios from "axios";
import { useEffect, useState } from "react";

const useGetGame = (game_id) => {
    const [game, setGame] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getGame = async () => {
            const url = `/api/games/show/${game_id}`;

            try {
                setLoading(true);
                const response = await axios.get(url);
                const data = response.data;
                setGame(data);
            } catch (error) {
                console.error('Error fetching game:', error);
                setError('Error fetching game. Please try again later.');
            } finally {
                setLoading(false);
            }
        }

        getGame();
    }, []);

    return { game, loading, error };
}

export default useGetGame;