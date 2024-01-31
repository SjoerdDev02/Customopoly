import { View, Text, Image, StyleSheet } from '@react-pdf/renderer';

const PDFSquare = ({ square_data, background_color }) => {
    const styles = StyleSheet.create({
        square: {
          backgroundColor: background_color,
          width: 550,
          height: 550,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px solid black',
        },
        square_content: {
          width: 400,
          height: 400,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid black',
        },
        square_container: {
            width: 300,
            height: 300,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1cm',
            transform: 'rotate(-45deg)'
        },
        square_dotted: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px dotted black',
        },
        square_item: {
            padding: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        image: {
            width: '30%',
            maxHeight: '90%',
        },
      });      

    return (
        <View style={styles.square}>
            <View style={styles.square_content}>
                <View style={styles.square_container}>
                    <View style={[styles.square_dotted, { width: 125, height: 80, transform: 'rotate(180deg)' }]}>
                        <View style={[styles.square_item, { width: 120, height: 70, backgroundColor: square_data[0].color }]}>
                            <Image style={styles.image} src={square_data[0].image.includes('/images') ? square_data[0].image : `/images/${square_data[0].image}`} />
                        </View>
                    </View>

                    <View style={[styles.square_item, { width: 250, color: 'white', backgroundColor: square_data[1].color }]}>
                        <Text>Cust</Text>
                        <Image style={styles.image} src={square_data[1].image.includes('/images') ? square_data[1].image : `/images/${square_data[1].image}`} />
                        <Text>mopoly</Text>
                    </View>

                    <View style={[styles.square_dotted, { width: 125, height: 80 }]}>
                        <View style={[styles.square_item, { width: 120, height: 70, backgroundColor: square_data[2].color }]}>
                            <Image style={styles.image} src={square_data[2].image.includes('/images') ? square_data[2].image : `/images/${square_data[2].image}`} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default PDFSquare;