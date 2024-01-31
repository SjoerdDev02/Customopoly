import { Image, StyleSheet, Text, View } from '@react-pdf/renderer';

const PDFCorner = ({ number, name, image }) => {
    let rotation = -135;
    
    if (number === 1) {
        rotation = -45;
    } else if (number === 2) {
        rotation = 45;
    } else if (number === 3) {
        rotation = 135;
    }

    const styles = StyleSheet.create({
        corner: { width: 75, height: 75, border: '1px solid black' },
        content: {  width: 75, height: 75, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: 2, transform: `rotate(${rotation}deg)` },
        prison: { position: 'relative', border: '1px solid black' },
        bar: { height: '100%', width: '2px', backgroundColor: 'black', position: 'absolute' },
        image: { maxHeight: '50%' },
    });

    return (
        <View style={styles.corner}>
            <View style={styles.content}>
                <Text style={{ fontSize: 10 }}>{name.split(' ')[0]}</Text>

                {number !== 2 && <Image style={styles.image} src={image.includes('/images') ? image : `/images/${image}`} />}
                {number === 2 && <View style={styles.prison}>
                    <View style={[styles.bar, { left: '10%' }]}></View>
                    <View style={[styles.bar, { left: '30%' }]}></View>
                    <View style={[styles.bar, { left: '50%' }]}></View>
                    <View style={[styles.bar, { right: '30%' }]}></View>
                    <View style={[styles.bar, { right: '10%' }]}></View>
                    <Image style={{ maxWidth: '50%' }} src={image.includes('/images') ? image : `/images/${image}`} />
                </View>}

                <Text style={{ fontSize: 10 }}>{name.split(' ')[1]}</Text>
            </View>
        </View>
    );
}

export default PDFCorner;