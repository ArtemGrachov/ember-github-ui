import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | github-org', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<GithubOrg />`);

    assert.equal(this.element.textContent.trim(), '[ Favorite ]');

    // Template block usage:
    await render(hbs`
      <GithubOrg>
        template block text
      </GithubOrg>
    `);

    assert.equal(this.element.textContent.trim(), '[ Favorite ]');
  });
});
