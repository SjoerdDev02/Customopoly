import PDFCard from './PDFCard/PDFCard';
import PDFCorner from './PDFCorner/PDFCorner';
import PDFSquare from './PDFSquare/PDFSquare';
import { StyleSheet, View } from '@react-pdf/renderer';

const PDFBoard = ({ data }) => {
    const styles = StyleSheet.create({
        board: {
            height: '85vh',
            width: '85vh',
            display: 'grid',
            backgroundColor: data.board_color,
            gridTemplateAreas: "corner_three corner_three card_t_one card_t_two card_t_three card_t_four card_t_five card_t_six card_t_seven card_t_eight card_t_nine corner_four corner_four;"
            + "corner_three corner_three card_t_one card_t_two card_t_three card_t_four card_t_five card_t_six card_t_seven card_t_eight card_t_nine corner_four corner_four;"
            + "card_l_nine card_l_nine square square square square square square square square square card_r_one card_r_one;"
            + "card_l_eight card_l_eight square square square square square square square square square card_r_two card_r_two;"
            + "card_l_seven card_l_seven square square square square square square square square square card_r_three card_r_three;"
            + "card_l_six card_l_six square square square square square square square square square card_r_four card_r_four;"
            + "card_l_five card_l_five square square square square square square square square square card_r_five card_r_five;"
            + "card_l_four card_l_four square square square square square square square square square card_r_six card_r_six;"
            + "card_l_three card_l_three square square square square square square square square square card_r_seven card_r_seven;"
            + "card_l_two card_l_two square square square square square square square square square card_r_eight card_r_eight;"
            + "card_l_one card_l_one square square square square square square square square square card_r_nine card_r_nine;"
            + "corner_two corner_two card_b_nine card_b_eight card_b_seven card_b_six card_b_five card_b_four card_b_three card_b_two card_b_one corner_one corner_one;"
            + "corner_two corner_two card_b_nine card_b_eight card_b_seven card_b_six card_b_five card_b_four card_b_three card_b_two card_b_one corner_one corner_one;",
            gridTemplateColumns: 'repeat(13, calc(85vh / 13))',
            gridTemplateRows: 'repeat(13, calc(85vh / 13))',
        },
    });    

    return (
        <View style={styles.board}>
            {data.corner_data.map((corner, index) => (
                <PDFCorner
                    key={`corner_${index}`}
                    number={corner.id}
                    name={corner.name}
                    image={corner.image}
                />
            ))}

            {data.top_data.map((data_item, index) => (
                <PDFCard
                    key={`top_${index}`}
                    side='top'
                    number={data_item.id}
                    name={data_item.name}
                    price={data_item.price || null}
                    base_price={data.base_price}
                    bonus={data_item.bonus || null}
                    city_color={data_item.color ? data.city_colors[data_item.color - 1] : null}
                    image={data_item.image ? data_item.image : null}
                />
            ))}

            {data.left_data.map((data_item, index) => (
                <PDFCard
                    key={`left_${index}`}
                    side='left'
                    number={data_item.id}
                    name={data_item.name}
                    price={data_item.price || null}
                    base_price={data.base_price}
                    bonus={data_item.bonus || null}
                    city_color={data_item.color ? data.city_colors[data_item.color - 1] : null}
                    image={data_item.image ? data_item.image : null}
                />
            ))}

            <PDFSquare
                square_data={data.square_data}
            />

            {data.right_data.map((data_item, index) => (
                <PDFCard
                    key={`right_${index}`}
                    side='right'
                    number={data_item.id}
                    name={data_item.name}
                    price={data_item.price || null}
                    base_price={data.base_price}
                    bonus={data_item.bonus || null}
                    city_color={data_item.color ? data.city_colors[data_item.color - 1] : null}
                    image={data_item.image ? data_item.image : null}
                />
            ))}

            {data.bottom_data.map((data_item, index) => (
                <PDFCard
                    key={`bottom_${index}`}
                    side='bottom'
                    number={data_item.id}
                    name={data_item.name}
                    price={data_item.price || null}
                    base_price={data.base_price}
                    bonus={data_item.bonus || null}
                    city_color={data_item.color || data_item.color === 0 ? data.city_colors[data_item.color - 1] : null}
                    image={data_item.image ? data_item.image : null}
                />
            ))}
        </View>
    );
}

export default PDFBoard;