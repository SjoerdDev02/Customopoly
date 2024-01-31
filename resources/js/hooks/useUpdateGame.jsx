import axios from "axios";

const useUpdateGame = () => {
    const updateGame = async (game) => {
        const url = `/api/games/${game.id}`;

        try {
            const response = await axios.put(url, { game });
            return response;
        } catch (error) {
            console.error('Error updating game:', error);
            return error;
        }
    }

    return updateGame;
}

export default useUpdateGame;