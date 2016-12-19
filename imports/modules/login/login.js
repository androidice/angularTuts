import { Meteor } from 'meteor/meteor';
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import template from './templates/login.html';
class LoginCtrl {
    constructor($scope, $reactive, $log, $state) {
        'ngInject';
        $reactive(this).attach($scope);
        this.$scope = $scope;
        this.$log = $log;
        this.$state = $state;
    }
    login() {
        Meteor.loginWithPassword(this.userFields.username, this.userFields.password, (err) => {
            if (!err) {
                this.$log.log('successfully login', Meteor.userId());
                this.$state.go('app.dashboard');
            }
            else {
                this.$log.log(err.reason);
            }
        });
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