import Service from '@ember/service';

export default Service.extend({
  items: [],

  favoriteItem(item) {
    this.get('items').addObject(item);
  },

  unfavoriteItem(item) {
    this.get('items').removeObject(item);
  }
});
