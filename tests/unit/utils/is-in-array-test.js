import EmberObject from '@ember/object';
import isInArray from 'github-ui/utils/is-in-array';
import { module, test } from 'qunit';

module('Unit | Utility | is-in-array', function() {
  test('it works', function(assert) {
    const Type = EmberObject.extend({
      item: 6,
      list: [1,2,3],
      isItemInList: isInArray('item', 'list')
    })

    const obj = Type.create();

    assert.equal(obj.get('isItemInList'), false, '');

    obj.get('list').addObject(6);

    assert.equal(obj.get('isItemInList'), true, '');

    obj.set('item', 52);

    assert.equal(obj.get('isItemInList'), false, '');
  });
});
