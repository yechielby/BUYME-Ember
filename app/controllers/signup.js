import Controller from '@ember/controller';
import { inject } from '@ember/service';
import { computed } from '@ember/object';

export default Controller.extend({
  userName: null,
  userEmail: null,
  userPassword: null,
  userPassword2: null,
  formInvalid: computed('userName', 'userEmail', 'userPassword', 'userPassword2', function() {
    let isValid = this.get('userName') && this.get('userEmail') && this.get('userPassword') && (this.get('userPassword')==this.get('userPassword2'));
    return !isValid;
  }),
  session: inject(),
  actions: {
    register() {
      this.get('session').registration(this.get('userName'), this.get('userEmail'), this.get('userPassword'))
      .then( ()=> {
        this.transitionToRoute('login');
      }, (err)=> {
        alert(err.responseText  ? err.responseText : err.toString());
      });
    }
  }
});
