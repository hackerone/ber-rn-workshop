import React from 'react';
import {TabNavigator} from 'react-navigation';

import Home from './HomePage';
import Trending from './TrendingPage';

export default TabNavigator({
  Home: { screen: Home },
  Trending: { screen: Trending },
});