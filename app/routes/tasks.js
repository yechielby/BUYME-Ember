import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  session: inject(),
  beforeModel() {
    if(!this.get('session.token')) {
        this.transitionTo('/');
    }
  },
  model() {
    return this.store.findAll('task');
  }
});
