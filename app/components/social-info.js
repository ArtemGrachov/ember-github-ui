import Component from '@ember/component';

export default Component.extend({
  isExpanded: false,
  actions: {
    toggleLinkSection() {
      this.toggleProperty('isExpanded');
      this.onToggle && this.onToggle();
    }
  }
});
