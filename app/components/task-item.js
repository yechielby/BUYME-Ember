import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  task: null,
  userslist: null,
  isShowingModal: false,
  users: inject(),
  actions: {
    toggleCompleted(task) {

      task.toggleProperty('isCompleted');
      task.save();

      // task.set('isCompleted', !isDone);
     // Do something ..
    },
    removeTask(task) {
      task.deleteRecord();
      task.save();
    },
    openModal(){
      this.get('users').getUsers(this.get('task.id'))
      .then( (u)=> {
        this.set('userslist', u);
      }, (err)=> {
        alert(err.responseText  ? err.responseText : err.toString());
      });


      this.toggleProperty('isShowingModal');
    },
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    }
  }
});
