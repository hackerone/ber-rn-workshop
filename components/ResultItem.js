import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';



const colors = [
  '#48324b',
  '#1e404e',
  '#000080',
  '#1e404e',
  '#000066',
  '#38eeff',
  '#03208d',
  '#48324b',
  '#5e0000',
  '#9bb280',
  '#b650c9',
  '#382db9',
  '#add8e6',
  '#38f9da',
  '#0e102e',
  '#cd0037',
  '#6df319',
  '#9ac1ff',
  '#1a62de',
  '#5bd06b',
  '#da2e37',
  '#43f547',
  '#660718',
  '#fc9cf9',
  '#342a74',
  '#fdf2d2',
  '#ddfdd2',
  '#ddfdd2',
  '#fdf2d2',
  '#ffe4c4',
  '#fdf2d2',
  '#9ac1ff',
  '#c3d7ff',
  '#ff82ab',
  '#db7093',
  '#ffec8b',
  '#bcee68',
  '#a2cd5a',
  '#ffb90f',
  '#eead0e',
  '#6495ed',
  '#cdaa7d',
];


const getDimension = ({width, height}) => {
  const windowWidth = Dimensions.get('window').width - 20;
  return {
    width: windowWidth,
    height: windowWidth*height/width,
  }
}

const ResultItem = ({item}) => {
  const image = item.images.downsized;
  const dim = getDimension({width: parseInt(image.width, 10), height: parseInt(image.height, 10)});
  const num = Math.ceil(Math.random()*100%colors.length);
  const randomColor = {
    backgroundColor: colors[num]
  };
  return <View style={[styles.resultItem]}>
    <Image style={[styles.resultItemImage, dim, randomColor]} source={{uri: image.url}}/>
  </View>
}

const styles = StyleSheet.create({
  resultItem: {
    marginBottom: 10,
  },
  resultItemImage: {
    marginLeft: 10,
    marginRight: 10,
  },
  resultItemImages: {
  }
});

export default ResultItem;