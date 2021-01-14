import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  usersList: null,
  task: null,
  users: inject(),
  actions: {
    shareUser(userId) {
      // alert(userId);
      this.get('users').shareTask(this.get('task.id'), userId)
      .then( ()=> {
        this.get('task').toggleProperty('isShared');
      }, (err)=> {
        alert(err.responseText  ? err.responseText : err.toString());
      });
    },
  }
});
