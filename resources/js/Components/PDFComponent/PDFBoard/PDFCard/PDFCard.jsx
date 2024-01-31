import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";

const PDFCard = ({ name, price, base_price, bonus, city_color, image, background_color }) => {
    const styles = StyleSheet.create({
        card: {
            height: 75,
            width: 400/9,
            backgroundColor: background_color,
            border: '1px solid black',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        card_color: {
            position: 'absolute',
            width: '100%',
            textAlign: 'center',
            top: 0,
            backgroundColor: city_color,
            paddingVertical: 10
        },
        content: {
            height: '60%',
            width: '80%',
            position: 'relative',
            top: city_color ? '10%' : 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: city_color ? 'center' : 'space-between',
            gap: city_color ? 10 : 0,
            textAlign: 'center',
            paddingHorizontal: 2,
        },
        text: {
            fontSize: 6,
        },
        image: {
            maxWidth: '90%',
            maxHeight: '40%'
        },
    });

    return (
        <View style={styles.card}>
            {city_color && <Text style={styles.card_color}></Text>}
            <View style={styles.content}>
                <Text style={styles.text}>{name}</Text>
                {image && <Image style={styles.image} src={image.includes('/images') ? image : `/images/${image}`} />}
                {price && <Text style={styles.text}>${bonus ? Math.round(base_price * price + base_price * 1/3) : Math.round(base_price * price)}</Text>}
            </View>
        </View>
    );
}

export default PDFCard;