import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight } from 'react-native';
import {getRandomColor} from '../utils/api';


const getDimension = ({width, height}) => {
  const windowWidth = Dimensions.get('window').width - 20;
  return {
    width: windowWidth,
    height: windowWidth*height/width,
  }
}

class ResultItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageType: 'downsized_still'
    };
    this.toggleImageType = this.toggleImageType.bind(this);
  }

  toggleImageType() {
    let imageType = 'downsized_still';
    if (this.state.imageType == 'downsized_still') {
      imageType = 'downsized';
    }

    this.setState({
      imageType
    })
  }

  render() {
    const {item} = this.props;
    const image = item.images[this.state.imageType];
    const dim = getDimension({width: parseInt(image.width, 10), height: parseInt(image.height, 10)});
    
    const randomColor = {
      backgroundColor: getRandomColor()
    };

    return <TouchableHighlight underlayColor='#FFF' style={[styles.resultItem]} onPress={this.toggleImageType}>
      <Image style={[styles.resultItemImage, dim, randomColor]} source={{uri: image.url}}/>
    </TouchableHighlight>
  }
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