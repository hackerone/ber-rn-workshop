import {observable, action} from 'mobx';
import {getTrendingItems} from '../utils/api';

class TrendingStore {
  @observable isLoading = false;
  @observable resultItems = [];

  @action performQuery(force = false) {
    this.isLoading = true;
    getTrendingItems()
      .then(resp => {
        this.isLoading = false;
        this.resultItems = resp.data;
      });
  }
}

const trending = new TrendingStore();

export default trending;