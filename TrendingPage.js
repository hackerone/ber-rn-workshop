import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class TrendingPage extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Trending',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./img/trending.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
    title: 'Trending',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is Trending page.</Text>
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