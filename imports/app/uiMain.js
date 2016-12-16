import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import accessTemplate from './templates/access.html';
import { Login } from '../modules/login/login';
import { Register } from '../modules/register/register';
class UiMainCtrl {
    constructor($scope, $reactive) {
        'ngInject';
    }
}
function config($urlRouterProvider, $stateProvider, $locationProvider) {
    'ngInject';
    $locationProvider.html5Mode(true);
    $stateProvider
        .state('access', {
        abstract: true,
        url: '/access',
        template: accessTemplate
    });
    $urlRouterProvider.otherwise('/access/login');
}
const module = angular.module('uiMain', [
    angularMeteor,
    uiRouter,
    Login,
    Register
]).component('uiMain', {
    controllerAs: 'vm',
    controller: UiMainCtrl
}).config(config);
export const uiMain = module.name;
//# sourceMappingURL=uiMain.js.map