import Controller from '@ember/controller';

export default Controller.extend({
  email: null,
  password: null,
  session: Ember.inject.service(),
  actions: {
    authenticate() {
      this.get('session').authenticate(this.get('email'),this.get('password'))
      .then( ()=> {
        alert('Logged in!');
        this.transitionToRoute('tasks');
      }, (err)=> {
        alert(`Error with login! ${err.responseText}`);
      });
    }
  }
});
