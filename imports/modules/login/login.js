import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import template from './templates/login.html';
class LoginCtrl {
    constructor($scope, $reactive, $log) {
        'ngInject';
    }
}
function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('access.login', {
        url: '/login',
        template: '<login></login>'
    });
}
const module = angular.module('login', [
    angularMeteor,
    uiRouter
]).component('login', {
    template,
    controllerAs: 'vm',
    controller: LoginCtrl
}).config(config);
export const Login = module.name;
//# sourceMappingURL=login.js.map