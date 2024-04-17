import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const ProductsList = ({ products }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {products.map((product, index) => (
          <View key={index}>
            <Image
              style={{ width: 325, height: 100 }}
              source={{ uri: product.img }}
            />
            <Text>{product.name}</Text>
            <Text>{product.description}</Text>
            <Text>${product.price}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    width: "100%",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: 150,
    height: 100,
  },
});

export default ProductsList;
