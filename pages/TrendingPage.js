import React from 'react';
import { StyleSheet, View, Image, FlatList } from 'react-native';
import trending from '../store/trending';
import ResultItem from '../components/ResultItem';
import {observer} from 'mobx-react';
import Loading from '../components/Loading';
@observer 
class TrendingPage extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Trending',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../img/trending.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
    title: 'Trending',
  };

  componentWillMount() {
    trending.performQuery();
  }

  _keyExtractor(item, index) {
    return item.id;
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={trending.resultItems}
          renderItem={({item}) => <ResultItem item={item} />}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  },
  image: {
    width: 300,
    height: 180
  }
});

export default TrendingPage;