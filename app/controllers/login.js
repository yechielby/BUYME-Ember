import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  email: null,
  password: null,
  session: inject(),
  actions: {
    authenticate() {
      this.get('session').authenticate(this.get('email'),this.get('password'))
      .then( ()=> {
        this.transitionToRoute('tasks');
      }, (err)=> {
        alert(err.responseText  ? err.responseText : err.toString());
      });
    }
  }
});
