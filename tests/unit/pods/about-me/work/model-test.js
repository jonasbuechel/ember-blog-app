import { moduleForModel, test } from 'ember-qunit';

moduleForModel('about-me/work', 'Unit | Model | about me/work', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});