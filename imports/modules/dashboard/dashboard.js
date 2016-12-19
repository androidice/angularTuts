import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { TopNav } from './components/topNav/topNav';
import template from './templates/dashboard.html';
class DashboadCtrl {
    constructor($scope, $reactive, $log) {
        'ngInject';
        $reactive(this).attach($scope);
        this.$scope = $scope;
        this.$log = $log;
    }
}
function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('app.dashboard', {
        url: '/dashboard',
        template: '<dashboard></dashboard>'
    });
}
const module = angular.module('dashboard', [
    angularMeteor,
    uiRouter,
    TopNav
]).component('dashboard', {
    template,
    controllerAs: 'vm',
    controller: DashboadCtrl
}).config(config);
export const Dashboard = module.name;
//# sourceMappingURL=dashboard.js.map