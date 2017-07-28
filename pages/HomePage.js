import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Button, TextInput } from 'react-native';
import {observer} from 'mobx-react';

import search from '../store/search';
import ResultItem from '../components/ResultItem';
import Loading from '../components/Loading';

@observer 
class HomePage extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../img/home.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
    title: 'Home',
  };

  constructor(props) {
    super(props);
    this.state = {
      viewName: 'View disabled.'
    }
  }

  _keyExtractor(item, index) {
    return item.id;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TextInput
            style={styles.searchInput}
            onChangeText={(text) => search.updateKeyword(text)}
            defaultValue={search.keyword}
            placeholder="Enter something..."
          />
          <Button onPress={() => search.performSearch()} title="Go"/>
        </View>
        {search.isLoading ? <Loading/> :
          <FlatList
              data={search.resultItems}
              renderItem={({item}) => <ResultItem item={item} />}
              keyExtractor={this._keyExtractor}
            />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row'
  },
  searchInput: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#EEE',
    flex: 1,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  sourceText: {
    fontSize: 13,
  },
  icon: {
    width: 20,
    height: 20,
  },
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
  }
});

export default HomePage;