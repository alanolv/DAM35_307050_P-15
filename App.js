import React, { useState } from 'react';
import { View, StyleSheet } from "react-native";
import SearchBar from "./Componets/SearchBar";
import ProductsList from "./Componets/ProductsList";
import products from "./data";

const App = () => {
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (text) => {
    if (typeof text !== 'string') {
      console.error('handleSearch was called with a non-string value:', text);
      return;
    }

    setSearch(text);
    const filtered = products.filter((product) => {
      if (!product.name || typeof product.name !== 'string') {
        console.error('Product does not have a name that is a string:', product);
        return false;
      }

      return product.name.toLowerCase().includes(text.toLowerCase());
    });
    setFilteredProducts(filtered);
  }

  return (
    <View style={styles.container}>
      <SearchBar value={search} onChangeText={handleSearch} />
      <ProductsList products={filteredProducts} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 50,
    padding: 5,
    borderRadius: 10,
  },
});

export default App;