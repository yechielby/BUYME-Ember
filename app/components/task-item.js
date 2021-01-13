import Component from '@ember/component';

export default Component.extend({
  task: null,
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
      alert('openModal');
    }
  }
});
