import axios from "axios";

const useDeleteGame = () => {
    const deleteGame = async (gameId) => {
        const url = `/api/games/${gameId}`;

        try {
            const response = await axios.delete(url);
            return response;
        } catch (error) {
            console.error('Error deleting game:', error);
            return error;
        }
    }

    return deleteGame;
}

export default useDeleteGame;