import Service from '@ember/service';
import { inject } from '@ember/service';
import { bind } from '@ember/runloop';
import $ from 'jquery';

export default Service.extend({
  session: inject(),
  getUsers(taskId) {
    return $.ajax({
      headers: {'Authorization': `Bearer ${this.get('session.token')}`},
      method: 'GET',
      url: `http://localhost:8000/api/task-detail/${taskId}`,
    }).then(bind(this, (info)=>{
      if(info.success){
        return info.success.users;
      }
      else{
        throw new Error(info.validationErrors ? JSON.stringify(info.validationErrors) : info.message);
      }
    }));
  },
  shareTask(taskId, userId) {
    return $.ajax({
      headers: {'Authorization': `Bearer ${this.get('session.token')}`},
      method: 'POST',
      url: 'http://localhost:8000/api/share-task',
      data: {task_id: taskId, user_id: userId}
    }).then(bind(this, (info)=>{
      if(info.success){
        alert('השיתוף התבצע בהצלחה!');
      }
      else{
        throw new Error(info.validationErrors ? JSON.stringify(info.validationErrors) : info.message);
      }
    }));
  }
});
