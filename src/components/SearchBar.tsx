import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import EyeVisible from './graphics/icons/eye-visible';
import Chat from './graphics/icons/chat';

const RNSearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => {
    setSearchQuery(query);
    console.log(searchQuery);
  }

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      icon={(props) => <Chat fill={"red"} style={styles.svgStyle} />}
    />
  );
};

export default RNSearchBar;

const styles = StyleSheet.create({
  svgStyle: {
    height: 30,
    width: 30,
    color: "red"
  }
})
