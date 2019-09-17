import Ember from 'ember';
import Route from '@ember/routing/route';

export default Route.extend({
  favorites: Ember.inject.service(),

  model() {
    return [
      { id: 'emberjs' },
      { id: 'ember-cli' },
      { id: 'microsoft' },
      { id: 'yahoo' },
      { id: 'netflix' },
      { id: 'facebook' },
    ]
  },

  actions: {
    favoriteClicked(org) {
      if (this.get('favorites.items').indexOf(org) === -1) {
        this.get('favorites').favoriteItem(org);
      } else {
        this.get('favorites').unfavoriteItem(org);
      }
    },
    linksToggled() {
      console.log('links toggled')
    }
  }
});
