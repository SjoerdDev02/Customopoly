import axios from "axios";

const useCreateGame = () => {
    const createGame = async (userId) => {
        const url = '/api/games';

        try {
            const response = await axios.post(url, { userId });
            const data = response.data;
            return data;
        } catch (error) {
            console.error('Error creating game:', error);
        }
    }

    return createGame;
}

export default useCreateGame;