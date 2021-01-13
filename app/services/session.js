import Service from '@ember/service';
import { bind } from '@ember/runloop';
import $ from 'jquery';

export default Service.extend({
  token: null,
  authenticate(email, pass) {
    return $.ajax({
      method: 'POST',
      url: 'http://localhost:8000/api/user-login',
      data: {email: email, password: pass}
    }).then(bind(this, (info)=>{
      if(info.success){
        this.set('token',info.success.token);
      }
      else{
        throw new Error(info.validationErrors ? JSON.stringify(info.validationErrors) : info.message);
      }
    }));
  }
});
