import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | nice-number', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('inputValue', '1234');

    await render(hbs`{{nice-number 42}}`);

    assert.equal(this.element.textContent.trim(), '42');

    await render(hbs`{{nice-number 1000}}`);

    assert.equal(this.element.textContent.trim(), '1K');

    await render(hbs`{{nice-number 7492}}`);

    assert.equal(this.element.textContent.trim(), '7.5K');

    await render(hbs`{{nice-number}}`);

    assert.equal(this.element.textContent.trim(), '');
  });
});
