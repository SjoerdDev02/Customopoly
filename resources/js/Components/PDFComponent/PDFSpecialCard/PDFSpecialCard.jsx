import React from 'react';
import { View, Image, StyleSheet } from '@react-pdf/renderer';

const PDFSpecialCard = ({ image, color }) => {
    const styles = StyleSheet.create({
        special_card: {
            width: 140,
            height: 120,
            display: 'flex',
            flexDirection: 'row',
        },

        front: {
            width: 70,
            height: 120,
            backgroundColor: color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        front_img: { transform: 'rotate(90deg)', height: '30%' },

        back: {
            width: 70,
            height: 120,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid black',
            textAlign: 'center',
        },
        back_content: {
            width: '80%',
            height: '90%',
            border: '1px solid black'
        },
     });

     return (
        <View style={styles.special_card}>
            <View style={styles.front}>
                <Image style={styles.front_img} src={image.includes('/images') ? image : `/images/${image}`} />
            </View>
            <View style={styles.back}>
                <View style={styles.back_content}></View>
            </View>
        </View>
    );
}

export default PDFSpecialCard;