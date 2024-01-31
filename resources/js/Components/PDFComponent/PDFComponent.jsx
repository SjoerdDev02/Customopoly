import { Document, Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer';
import PDFExCard from './PDFExCard/PDFExCard';
import PDFSpecialCard from './PDFSpecialCard/PDFSpecialCard';
import PDFCorner from './PDFBoard/PDFCorner/PDFCorner';
import PDFSquare from './PDFBoard/PDFSquare/PDFSquare';
import PDFCard from './PDFBoard/PDFCard/PDFCard';

const PDFComponent = ({ game }) => {
    const styles = StyleSheet.create({
        flex_column_page: {
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 10,
        },

        flex_row_page: {
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 10,
        },

        flex_row_component: {
            width: '95vw',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 10,
        },

        flex_column_component: {
            height: '95vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 10,
        },
    });

    return (
        <Document>
            <Page style={[styles.flex_row_page, { marginTop: 100 }]}>
                <PDFSquare
                    square_data={game.square_data}
                    background_color={game.board_color}
                />
            </Page>

            <Page size='A4' style={styles.flex_column_page}>
                    <View style={styles.flex_row_component}>
                        {game.bottom_data.map((item, index) => (
                        <PDFCard
                            key={`bottom_${index}`}
                            name={item.name}
                            price={item.price || null}
                            base_price={game.base_price}
                            bonus={item.bonus || null}
                            city_color={item.color ? game.city_colors[item.color - 1] : null}
                            image={item.image ? item.image : null}
                            background_color={game.board_color}
                        />
                    ))}
                    </View>

                    <View style={styles.flex_row_component}>
                        {game.left_data.map((item, index) => (
                        <PDFCard
                            key={`left_${index}`}
                            name={item.name}
                            price={item.price || null}
                            base_price={game.base_price}
                            bonus={item.bonus || null}
                            city_color={item.color ? game.city_colors[item.color - 1] : null}
                            image={item.image ? item.image : null}
                            background_color={game.board_color}
                        />
                    ))}
                    </View>

                    <View style={styles.flex_row_component}>
                        {game.top_data.map((item, index) => (
                        <PDFCard
                            key={`top_${index}`}
                            name={item.name}
                            price={item.price || null}
                            base_price={game.base_price}
                            bonus={item.bonus || null}
                            city_color={item.color ? game.city_colors[item.color - 1] : null}
                            image={item.image ? item.image : null}
                            background_color={game.board_color}
                        />
                    ))}
                    </View>

                    <View style={styles.flex_row_component}>
                        {game.right_data.map((item, index) => (
                        <PDFCard
                            key={`right_${index}`}
                            name={item.name}
                            price={item.price || null}
                            base_price={game.base_price}
                            bonus={item.bonus || null}
                            city_color={item.color ? game.city_colors[item.color - 1] : null}
                            image={item.image ? item.image : null}
                            background_color={game.board_color}
                        />
                    ))}
                    </View>

                    <View style={styles.flex_row_component}>
                        {game.corner_data.map((corner, index) => (
                        <PDFCorner
                            key={`corner_${index}`}
                            number={corner.id}
                            name={corner.name}
                            image={corner.image}
                        />
                    ))}
                    </View>

                    <View style={styles.flex_row_component}>
                        {game.piece_data.map((piece, index) => (
                        <View key={index} style={{ backgroundColor: piece.color, padding: 10, marginBottom: 5, width: 40, height: 40, borderRadius: 50 }}>
                            <Image src={piece.image.includes('/images') ? piece.image : `/images/${piece.image}`} />
                        </View>
                    ))}
                    </View>
            </Page>

            <Page style={styles.flex_column_page}>
                <View style={styles.flex_row_component}>
                    {game.bottom_data.map((item, index) => (
                        <PDFExCard
                            key={index}
                            index={index}
                            side='bottom'
                            name={item.name}
                            price={item.price}
                            base_price={game.base_price}
                            bonus={item.bonus}
                            city_color={game.city_colors[item.color - 1]}
                            image={item.image}
                            card_color={game.board_color}
                            card_image={game.square_data[1].image}
                        />
                    ))}
                </View>

                <View style={styles.flex_row_component}>
                    {game.left_data.map((item, index) => (
                        <PDFExCard
                            key={index}
                            index={index}
                            side='left'
                            name={item.name}
                            price={item.price}
                            base_price={game.base_price}
                            bonus={item.bonus}
                            city_color={game.city_colors[item.color - 1]}
                            image={item.image}
                            card_color={game.board_color}
                            card_image={game.square_data[1].image}
                        />
                    ))}
                </View>

                <View style={styles.flex_row_component}>
                    {game.top_data.map((item, index) => (
                        <PDFExCard
                            key={index}
                            index={index}
                            side='top'
                            name={item.name}
                            price={item.price}
                            base_price={game.base_price}
                            bonus={item.bonus}
                            city_color={game.city_colors[item.color - 1]}
                            image={item.image}
                            card_color={game.board_color}
                            card_image={game.square_data[1].image}
                        />
                    ))}
                </View>

                <View style={styles.flex_row_component}>
                    {game.right_data.map((item, index) => (
                        <PDFExCard
                            key={index}
                            index={index}
                            side='right'
                            name={item.name}
                            price={item.price}
                            base_price={game.base_price}
                            bonus={item.bonus}
                            city_color={game.city_colors[item.color - 1]}
                            image={item.image}
                            card_color={game.board_color}
                            card_image={game.square_data[1].image}
                        />
                    ))}
                </View>
            </Page>

            <Page style={styles.flex_column_page}>
                <View style={styles.flex_row_component}>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <PDFSpecialCard key={index} image={game.square_data[2].image} color={game.square_data[2].color} />
                    ))}
                </View>

                <View style={styles.flex_row_component}>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <PDFSpecialCard key={index} image={game.square_data[2].image} color={game.square_data[2].color} />
                    ))}
                </View>

                <View style={styles.flex_row_component}>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <PDFSpecialCard key={index} image={game.square_data[0].image} color={game.square_data[0].color} />
                    ))}
                </View>

                <View style={styles.flex_row_component}>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <PDFSpecialCard key={index} image={game.square_data[0].image} color={game.square_data[0].color} />
                    ))}
                </View>
            </Page>
        </Document>
    );
}

export default PDFComponent;