import { inject } from '@ember/service';
import { computed } from '@ember/object';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://localhost:8000',
  namespace: 'api',
  session: inject(),
  headers: computed('session.token', function() {
    return {
      'Authorization': `Bearer ${this.get('session.token')}`
    }
  })
});
