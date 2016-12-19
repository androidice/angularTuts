import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import template from './templates/topNav.html';
class TopNavCtrl {
    constructor($scope, $reactive, $log) {
        'ngInject';
        $reactive(this).attach($scope);
        this.$scope = $scope;
        this.$log = $log;
    }
}
const module = angular.module('topNav', [
    angularMeteor,
    uiRouter
]).component('topNav', {
    template,
    controllerAs: 'vm',
    controller: TopNavCtrl
});
export const TopNav = module.name;
//# sourceMappingURL=topNav.js.map