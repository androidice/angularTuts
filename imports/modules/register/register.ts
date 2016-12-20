/// <reference path="./typings/register.ts" />
import { Meteor } from 'meteor/meteor';
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './templates/register.html';

class RegisterCtrl {
  userFields: IUserFields;
  $log: any;
  $scope: any;
  $state: any;
  constructor($scope, $reactive, $log, $state){
    'ngInject';
    $reactive(this).attach($scope);
    this.$scope = $scope;
    this.$log = $log;
    this.$state = $state;
  }

  register(){
      if(this.$scope.registrationForm.$valid){
        Meteor.call('user.register', this.userFields,(err, res)=>{
          if(!err){
            this.$log.log(res);
            fbq('track', 'CompleteRegistration');
            this.$state.go('access.login');
          }else {
            this.$log.log(err);
          }
        });
      }
  }
}

function config($stateProvider){
  'ngInject';

  $stateProvider
    .state('access.register',{
      url: '/register',
      template: '<register></register>'
    })
}

const module = angular.module('register',[
  angularMeteor,
  uiRouter
]).component('register',{
  template,
  controllerAs: 'vm',
  controller: RegisterCtrl
}).config(config);

export const Register = module.name;
