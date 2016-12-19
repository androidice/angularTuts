import { Meteor } from 'meteor/meteor'
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './templates/topNav.html'
class TopNavCtrl {
  $scope: any;
  $log: any;
  $state: any;
  constructor($scope, $reactive, $log, $state){
    'ngInject';
    $reactive(this).attach($scope);
    this.$scope = $scope;
    this.$log = $log;
    this.$state = $state;
  }

  signOut(){
    Meteor.logout((error)=>{
      if(error){
        this.$log.log(error.reason);
      }
      else {
        this.$log.log('LogOut!');
        this.$state.go('access.login');
      }
    });
  }
}

const module = angular.module('topNav',[
  angularMeteor,
  uiRouter
]).component('topNav',{
  template,
  controllerAs: 'vm',
  controller: TopNavCtrl
});

export const TopNav = module.name;