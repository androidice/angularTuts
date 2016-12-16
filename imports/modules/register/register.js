import { Meteor } from 'meteor/meteor';
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import template from './templates/register.html';
class RegisterCtrl {
    constructor($scope, $reactive, $log, $state) {
        'ngInject';
        $reactive(this).attach($scope);
        this.$scope = $scope;
        this.$log = $log;
        this.$state = $state;
    }
    register() {
        Meteor.call('user.register', this.userFields, (err, res) => {
            if (!err) {
                this.$log.log(res);
                this.$state.go('access.login');
            }
            else {
                this.$log.log(err);
            }
        });
    }
}
function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('access.register', {
        url: '/register',
        template: '<register></register>'
    });
}
const module = angular.module('register', [
    angularMeteor,
    uiRouter
]).component('register', {
    template,
    controllerAs: 'vm',
    controller: RegisterCtrl
}).config(config);
export const Register = module.name;
//# sourceMappingURL=register.js.map