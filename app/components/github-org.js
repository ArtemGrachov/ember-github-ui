import Component from '@ember/component';

export default Component.extend({
  tagname: 'li',
  actions: {
    favoriteClicked() {
      this.sendAction('on-fav-clicked', this.org)
    }
  }
});
