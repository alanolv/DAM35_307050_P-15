import React from 'react';
import {View, Text, StyleSheet} from "react-native";

const ProductsItems = ({product}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}>{product.name}</Text>
            <Text style={styles.textDescription}>{product.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },
    textTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    textDescription: {
        fontSize: 16,
    },
});

export default ProductsItems;