import Controller from '@ember/controller';
import { computed } from '@ember/object';


export default Controller.extend({
  newTask: null,
  tasksInCompleted: computed('model', 'model.@each.isCompleted', function() {
    let models = this.get('model');
    return models.filterBy('isCompleted', false).get('length');
  }),
  tasksCompleted: computed('model', 'model.@each.isCompleted', function() {
    let models = this.get('model');
    return models.filterBy('isCompleted', true).get('length');
  }),
  tasksSummary: computed('model', 'model.@each.isCompleted', function() {
    let models = this.get('model');
    return models.get('length');
  }),
  actions: {
    addTask() {
      // alert(this.get('newTask'));
      this.get('store').createRecord('task', {
        title: this.get('newTask'),
        isCompleted: false,
        isShared: false
      }).save();
    }
  }
});
