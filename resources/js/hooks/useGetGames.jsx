import axios from "axios";
import { useEffect, useState } from "react";

const useGetGames = (user_id) => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getGames = async () => {
            const url = `/api/games/${user_id}`;

            try {
                setLoading(true);
                const response = await axios.get(url);
                const data = response.data;
                setGames(data);
            } catch (error) {
                console.error('Error fetching games:', error);
                setError('Error fetching games. Please try again later.');
            } finally {
                setLoading(false);
            }
        }

        getGames();
    }, [user_id]);

    return { games, loading, error };
}

export default useGetGames;