import React from 'react';
import { TextInput } from 'react-native';

const SearchBar = ({ value, onChangeText }) => {
  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}

export default SearchBar;