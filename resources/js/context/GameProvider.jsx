import { GameContext } from "./GameContext";
import { useState } from "react";

const INITIAL_STATE = {
    default_game_data: {
        name: "Customopoly",
        board_color: "#d9dab7",
        base_price: 60
    },
  
    default_piece_data: [
        { id: 1, image: "airplane_piece.png", color: "#32964B" },
        { id: 2, image: "car_piece.png", color: "#3264E1" },
        { id: 3, image: "dog_piece.png", color: "#FFC84B" },
        { id: 4, image: "scooter_piece.png", color: "#C84B32" },
        { id: 5, image: "house_piece.png", color: "#3264E1" },
        { id: 6, image: "hotel_piece.png", color: "#32964B" }
    ],
  
    default_city_colors: ["#A14F2E", "#99E4FD", "#EB2399", "#FF8E00", "#FF0006", "#FFF400", "#00B64D", "#0075C2"],
  
    default_square_data: [
        { id: 1, image: "questionmark_icon.png", color: "#00AAFF" },
        { id: 2, image: "monopoly_head.png", color: "#FF4B32" },
        { id: 3, image: "treasury_icon.png", color: "#EEAA00" }
    ],
  
    default_corner_data: [
        { id: 1, name: "Salary", image: "arrow_icon.png" },
        { id: 2, name: "In Jail", image: "prisoner_icon.png" },
        { id: 3, name: "Free Parking", image: "free_parking_icon.png" },
        { id: 4, name: "To Jail", image: "police_icon.png" }
    ],
  
    default_side_data: [
        [
            { id: 1, name: "Kent Road", price: 1, bonus: false, image: null, color: 0 },
            { id: 2, name: "Community Chest", price: null, bonus: false, image: "treasury_icon.png", color: null },
            { id: 3, name: "White Chapel", price: 1, bonus: false, image: null, color: 0 },
            { id: 4, name: "Income Tax", price: 3, bonus: false, image: "tax_icon.png", color: null },
            { id: 5, name: "Kings St", price: 3, bonus: false, image: "train_icon.png", color: null },
            { id: 6, name: "Angel Islington", price: 1.5, bonus: false, image: null, color: 1 },
            { id: 7, name: "Chance", price: null, bonus: false, image: "questionmark_icon.png", color: null },
            { id: 8, name: "Euston Rd", price: 1.5, bonus: false, image: null, color: 1 },
            { id: 9, name: "Penton Rd", price: 1.5, bonus: true, image: null, color: 1 }
        ],
        [
            { id: 1, name: "Pall Mall", price: 2, bonus: false, image: null, color: 2 },
            { id: 2, name: "Electricity", price: 2.5, bonus: false, image: "electricity_icon.png", color: null },
            { id: 3, name: "White Hall", price: 2, bonus: false, image: null, color: 2 },
            { id: 4, name: "Northumb Ave", price: 2, bonus: true, image: null, color: 2 },
            { id: 5, name: "Maryle St", price: 3, bonus: false, image: "train_icon.png", color: null },
            { id: 6, name: "Bow Street", price: 2.5, bonus: false, image: null, color: 3 },
            { id: 7, name: "Community Chest", price: null, bonus: false, image: "treasury_icon.png", color: null },
            { id: 8, name: "Marlbour St", price: 2.5, bonus: false, image: null, color: 3 },
            { id: 9, name: "Vine Street", price: 2.5, bonus: true, image: null, color: 3 }
        ],
        [
            { id: 1, name: "Strand", price: 3, bonus: false, image: null, color: 4 },
            { id: 2, name: "Chance", price: null, bonus: false, image: "questionmark_icon.png", color: null },
            { id: 3, name: "Fleet Street", price: 3, bonus: false, image: null, color: 4 },
            { id: 4, name: "Trafalgar Sq", price: 3, bonus: true, image: null, color: 4 },
            { id: 5, name: "Fenchurch St", price: 3, bonus: false, image: "train_icon.png", color: null },
            { id: 6, name: "Leicester Sq", price: 3.5, bonus: false, image: null, color: 5 },
            { id: 7, name: "Coventry St", price: 3.5, bonus: false, image: null, color: 5 },
            { id: 8, name: "Water Works", price: 2.5, bonus: false, image: "water_works_icon.png", color: null },
            { id: 9, name: "Piccadilly", price: 3.5, bonus: true, image: null, color: 5 }
        ],
        [
            { id: 1, name: "Regent Street", price: 4, bonus: false, image: null, color: 6 },
            { id: 2, name: "Oxford Street", price: 4, bonus: false, image: null, color: 6 },
            { id: 3, name: "Community Chest", price: null, bonus: false, image: "treasury_icon.png", color: null },
            { id: 4, name: "Bond Street", price: 4, bonus: true, image: null, color: 6 },
            { id: 5, name: "Liverpool St", price: 3, bonus: false, image: "train_icon.png", color: null },
            { id: 6, name: "Chance", price: null, bonus: false, image: "questionmark_icon.png", color: null },
            { id: 7, name: "Park Lane", price: 4.5, bonus: false, image: null, color: 7 },
            { id: 8, name: "Super Tax", price: 3.5, bonus: false, image: "super_tax_icon.png", color: null },
            { id: 9, name: "MayFair", price: 5, bonus: false, image: null, color: 7 }
        ]
    ]
}

export const GameProvider = ({ children }) => {
    const [game, setGame] = useState(INITIAL_STATE);

    const formatGameData = (gameData) => {
        const name = gameData.name;
        const board_color = gameData.board_color;
        const base_price = gameData.base_price;
        const piece_data = gameData.piece_data.pieces.map((piece, index) => ({
            id: index + 1, image: piece.image, color: piece.color
        }));
        const square_data = gameData.square_data.square_items.map((item, index) => ({
            id: index + 1, image: item.image, color: item.color
        }));
        const city_colors = gameData.city_colors.city_colors.map((color) => color.color);
        const corner_data = gameData.corner_data.corners.map((corner, index) => ({
            id: index + 1, name: corner.name, image: corner.image
        }));
        const bottom_data = gameData.side_data[0].sides.map((side, index) => ({
            id: index + 1, name: side.name, price: side.price, bonus: side.bonus, color: side.color, image: side.image
        }));
        const left_data = gameData.side_data[1].sides.map((side, index) => ({
            id: index + 1, name: side.name, price: side.price, bonus: side.bonus, color: side.color, image: side.image
        }));
        const top_data = gameData.side_data[2].sides.map((side, index) => ({
            id: index + 1, name: side.name, price: side.price, bonus: side.bonus, color: side.color, image: side.image
        }));
        const right_data = gameData.side_data[3].sides.map((side, index) => ({
            id: index + 1, name: side.name, price: side.price, bonus: side.bonus, color: side.color, image: side.image
        }));

        const formattedData = { name, board_color, base_price, piece_data, square_data, city_colors, corner_data, bottom_data, left_data, top_data, right_data };
        setGame(formattedData);
    }

    return (
        <GameContext.Provider value={{ game, setGame, formatGameData }}>
            {children}
        </GameContext.Provider>
    );
};