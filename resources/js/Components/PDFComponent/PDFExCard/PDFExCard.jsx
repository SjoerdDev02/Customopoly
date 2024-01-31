import React from 'react';
import { View, Text, StyleSheet, Image } from '@react-pdf/renderer';

const PDFExCard = ({ index, side, name, price, base_price, bonus, city_color, image, card_color, card_image }) => {
    const definitive_base_price = bonus ? Math.round(base_price * price + base_price * 1/3) : Math.round(base_price * price);

    const styles = StyleSheet.create({
        ex_card: {
            width: 140,
            height: 120,
            display: 'flex',
            flexDirection: 'row'
        },

        front: {
            width: 70,
            height: 120,
            backgroundColor: card_color, 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        front_img: {
            transform: 'rotate(90deg)',
            height: '30%'
        },

        back: {
            width: 70,
            height: 120,
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid black',
            textAlign: 'center'
        },
        city_text: {
            width: '100%',
            fontSize: 6,
            backgroundColor: city_color,
            position: 'absolute',
            top: 0,
            paddingVertical: 10
        },
        head_text: {
            fontSize: 6,
        },
        big_container: {
            width: '75%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: 5,
        },
        group_container: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 3,
        },
        small_container: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        paragraph: {
            fontSize: 4
        },
    });

    const make_card_check = (!image && city_color) || ((index === 1 && side === 'left') || (index === 0 && side === 'top') || index === 4);

    return (
        make_card_check && (
            <View style={styles.ex_card}>
                <View style={styles.front}>
                    <Image style={styles.front_img} src={card_image.includes('/images') ? card_image : `/images/${card_image}`} />
                </View>
                <View style={styles.back}>
                    {!image && city_color && (
                        <>
                            <Text style={[styles.city_text, { backgroundColor: city_color, position: 'absolute', top: 0, paddingVertical: 10 }]}>{name}</Text>

                            <View style={[styles.big_container, { top: '10%' }]}>
                                <Text style={[styles.paragraph, { fontWeight: 'extrabold' }]}>Rent ${definitive_base_price * 1}</Text>
                                <View style={styles.group_container}>
                                    <View style={styles.small_container}>
                                        <Text style={styles.paragraph}>1 House</Text>
                                        <Text style={styles.paragraph}>${definitive_base_price * 5}</Text>
                                    </View>
                                    <View style={styles.small_container}>
                                        <Text style={styles.paragraph}>2 Houses</Text>
                                        <Text style={styles.paragraph}>${definitive_base_price * 10}</Text>
                                    </View>
                                    <View style={styles.small_container}>
                                        <Text style={styles.paragraph}>3 Houses</Text>
                                        <Text style={styles.paragraph}>${definitive_base_price * 15}</Text>
                                    </View>
                                    <View style={styles.small_container}>
                                        <Text style={styles.paragraph}>4 Houses</Text>
                                        <Text style={styles.paragraph}>${definitive_base_price * 20}</Text>
                                    </View>
                                    <View style={styles.small_container}>
                                        <Text style={styles.paragraph}>Hotel</Text>
                                        <Text style={styles.paragraph}>${definitive_base_price * 25}</Text>
                                    </View>
                                </View>
                                <Text style={[styles.paragraph, { fontWeight: 'extrabold' }]}>Mortgage value ${definitive_base_price * 5}</Text>
                                <Text style={styles.paragraph}>Houses cost ${definitive_base_price * 5} each</Text>
                                <Text style={[styles.paragraph, { marginBottom: 3 }]}>Hotel cost ${definitive_base_price * 5}</Text>
                            </View>
                        </>
                    )}
                    {(image && !city_color) && (
                        <>
                            <View style={styles.big_container}>
                                <Text style={styles.head_text}>{name}</Text>
                                <Image style={{ maxWidth: '30%', maxHeight: '30%' }} src={image.includes('/images') ? image : `/images/${image}`} />
                                {(index === 1 && side === 'left' || index === 0 && side === 'top') && (
                                    <>
                                        <Text style={[styles.paragraph, { paddingHorizontal: 2 }]}>If one utility is owned, rent is 4 times the amount shown on the dice.</Text>
                                        <Text style={[styles.paragraph, { paddingHorizontal: 2 }]}>If both utilities are owned, rent is 10 times the amount shown on the dice.</Text>
                                    </>
                                )}
                                {index === 4 && (
                                    <>
                                        <View style={styles.group_container}>
                                            <View style={styles.small_container}>
                                                <Text style={styles.paragraph}>Rent</Text>
                                                <Text style={styles.paragraph}>${definitive_base_price * 5}</Text>
                                            </View>
                                            <View style={styles.small_container}>
                                                <Text style={styles.paragraph}>2 transports owned</Text>
                                                <Text style={styles.paragraph}>${definitive_base_price * 10}</Text>
                                            </View>
                                            <View style={styles.small_container}>
                                                <Text style={styles.paragraph}>3 transports owned</Text>
                                                <Text style={styles.paragraph}>${definitive_base_price * 15}</Text>
                                            </View>
                                            <View style={styles.small_container}>
                                                <Text style={styles.paragraph}>4 transports owned</Text>
                                                <Text style={styles.paragraph}>${definitive_base_price * 20}</Text>
                                            </View>
                                        </View>
                                        <Text style={[styles.paragraph, { fontWeight: 'extrabold' }]}>Mortgage value - ${definitive_base_price * 15}</Text>
                                    </>
                                )}
                            </View>
                        </>
                    )}
                </View>
            </View>
        )
    );
}

export default PDFExCard;