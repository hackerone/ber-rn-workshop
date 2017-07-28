import {observable, action} from 'mobx';
import {getSearchResultItems} from '../utils/api';

class SearchStore {
  @observable keyword = '';
  @observable isLoading = false;
  @observable resultItems = [];

  @action updateKeyword(keyword) {
    this.keyword = keyword;
  }

  @action performSearch() {
    if(!this.keyword) 
      return;

    this.isLoading = true;
    getSearchResultItems(this.keyword)
      .then(resp => {
        this.isLoading = false;
        this.resultItems = resp.data;
      });
  }
}

const search = new SearchStore();

export default search;