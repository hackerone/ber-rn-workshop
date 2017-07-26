import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Button } from 'react-native';

class HomePage extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./img/home.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is Home Page.</Text>
        <Button onPress={() => this.props.navigation.navigate('Trending')} title="Go to trending page."/>
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

export default HomePage;