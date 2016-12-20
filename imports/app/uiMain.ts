import { Meteor } from 'meteor/meteor';
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import accessTemplate from './templates/access.html';
import appTemplate from './templates/app.html';
import { Login } from '../modules/login/login';
import { Register } from '../modules/register/register'
import { Dashboard } from '../modules/dashboard/dashboard';
import { Validators } from '../modules/common/validators'

class UiMainCtrl {
  constructor($scope, $reactive){
    'ngInject';
  }
}

function checkUser($q){
  return $q((resolve, reject)=>{
    if(Meteor.userId()){
      resolve();
    }else {
      reject('AUTH_REQUIRED')
    }
  });
}

function config($urlRouterProvider, $stateProvider, $locationProvider){
  'ngInject';
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('access', {
      abstract:true,
      url: '/access',
      template: accessTemplate
    })
    .state('app',{
      abstract: true,
      url: '/app',
      template: appTemplate,
      resolve: {
        checkUser: checkUser
      }
    })
    ;
  $urlRouterProvider.otherwise('/access/login');
}


function run($rootScope, $state, $log){
  'ngInject';
  $rootScope.$on('$stateChangeError',(event, toState, toParams, fromState, fromParams, error)=>{
    if(error === 'AUTH_REQUIRED'){
      $log.log(error);
      $state.go('access.login');
    }
  });
}

const module = angular.module('uiMain',[
  angularMeteor,
  uiRouter,
  Login,
  Register,
  Dashboard,
  Validators
]).component('uiMain',{
  controllerAs: 'vm',
  controller: UiMainCtrl
}).config(config)
  .run(run);
export const uiMain = module.name;
