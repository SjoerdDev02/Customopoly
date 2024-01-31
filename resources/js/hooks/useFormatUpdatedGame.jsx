const useFormatUpdatedGame = ({ updatedGame, data }) => {
    const formatUpdatedGame = () => {
        updatedGame.name = data.name;
        updatedGame.board_color = data.board_color;
        updatedGame.base_price = data.base_price;

        updatedGame.piece_data.pieces = updatedGame.piece_data.pieces.map((piece, index) => {
            return { ...piece, image: data.piece_data[index].image, color: data.piece_data[index].color };
        })

        updatedGame.square_data.square_items = updatedGame.square_data.square_items.map((item, index) => {
            return { ...item, image: data.square_data[index].image, color: data.square_data[index].color };
        });

        updatedGame.city_colors.city_colors = updatedGame.city_colors.city_colors.map((color, index) => {
            return { ...color, color: data.city_colors[index] };
        });

        updatedGame.corner_data.corners = updatedGame.corner_data.corners.map((corner, index) => {
            return {
                ...corner,
                name: data.corner_data[index].name,
                image: data.corner_data[index].image,
            };
        });

        updatedGame.side_data[0].sides = updatedGame.side_data[0].sides.map((item, index) => {
            return {
                ...item,
                name: data.bottom_data[index].name || null,
                price: data.bottom_data[index].price || null,
                color: data.bottom_data[index].color || null,
                image: data.bottom_data[index].image || null,
            }
        });

        updatedGame.side_data[1].sides = updatedGame.side_data[1].sides.map((item, index) => {
            return {
                ...item,
                name: data.left_data[index].name || null,
                price: data.left_data[index].price || null,
                color: data.left_data[index].color || null,
                image: data.left_data[index].image || null,
            }
        });

        updatedGame.side_data[2].sides = updatedGame.side_data[2].sides.map((item, index) => {
            return {
                ...item,
                name: data.top_data[index].name || null,
                price: data.top_data[index].price || null,
                color: data.top_data[index].color || null,
                image: data.top_data[index].image || null,
            }
        });

        updatedGame.side_data[3].sides = updatedGame.side_data[3].sides.map((item, index) => {
            return {
                ...item,
                name: data.right_data[index].name || null,
                price: data.right_data[index].price || null,
                color: data.right_data[index].color || null,
                image: data.right_data[index].image || null,
            }
        });

        return updatedGame;
    }

    return formatUpdatedGame();
}

export default useFormatUpdatedGame;