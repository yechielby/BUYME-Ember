import Service from '@ember/service';

export default Service.extend({
  token: null,
  authenticate(email, pass) {
    return Ember.$.ajax({
      method: 'POST',
      url: 'http://localhost:8000/api/user-login',
      data: {email: email, password: pass}
    }).then((info)=>{
      this.set('token',info.success.token);
    })
  }
});
