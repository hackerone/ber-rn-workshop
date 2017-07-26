import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

import {getNames} from './utils/api';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is some text.</Text>
        <Image source={{uri: 'https://media.giphy.com/media/10ldrQ79zjLRJK/giphy.gif'}} style={styles.image}/>
        <FlatList 
          style={styles.list}
          data={getNames()}
          renderItem={({item}) => <Text style={styles.text}>{item.name}</Text>}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    width: '100%'
  },
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 10
  },
  image: {
    width: 300,
    height: 180
  }
});

export default App;