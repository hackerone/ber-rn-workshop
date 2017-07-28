import React from 'react';
import {TabNavigator} from 'react-navigation';

import Home from './pages/HomePage';
import Trending from './pages/TrendingPage';

export default TabNavigator({
  Home: { screen: Home },
  Trending: { screen: Trending },
});