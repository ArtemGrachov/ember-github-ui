import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | github-repo', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<GithubRepo />`);

    assert.equal(this.element.textContent.trim(),
`(
  Forks:  |
  Watchers: 
)`);

    // Template block usage:
    await render(hbs`
      <GithubRepo>
        template block text
      </GithubRepo>
    `);

    assert.equal(this.element.textContent.trim(), 
`(
  Forks:  |
  Watchers: 
)`);
  });
});
