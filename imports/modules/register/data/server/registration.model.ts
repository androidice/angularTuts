///<reference path="../../typings/register.ts" />

import { Accounts } from 'meteor/accounts-base'
let registration = function(){

  function register(userFields:IUserFields){
    let userId: string;
    try{
      userId = Accounts.createUser({
        username: userFields.username,
        email: userFields.email,
        password: userFields.password,
        profile: {
          name: userFields.name||"",
          state: userFields.state||""
        }
      });
      console.log('registration successful', userId);
    }catch(e){
      throw new Meteor.Error('500', e.reason);
    }
    return userId;
  }

  return {
    register
  }
}();

export default registration;

