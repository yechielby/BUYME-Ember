import DS from 'ember-data';
import EmberResolver from 'ember-resolver';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  session: Ember.inject.service(),
  headers: Ember.computed('session.token', function() {
    return {
      'Authorization': `Bearer ${this.get('session.token')}`
    }
  })
});
