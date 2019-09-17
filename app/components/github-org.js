import { inject } from '@ember/service';
import Component from '@ember/component';
import isInArray from '../utils/is-in-array';

export default Component.extend({
  tagname: 'li',
  favorites: inject(),
  isFavorited: isInArray('org', 'favorites.items'),
  actions: {
    favoriteClicked() {
      this.sendAction('on-fav-clicked', this.org);
    }
  }
});
