import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import template from './templates/management.html';
class VendorManagementCtrl {
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
        .state('admin.vendors', {
        url: '/vendors',
        template: '<vendor-management></vendor-management>'
    });
}
const module = angular.module('vendorManagement', [
    angularMeteor,
    uiRouter
]).component('vendorManagement', {
    template,
    controllerAs: 'vm',
    controller: VendorManagementCtrl
}).config(config);
export const VendorManagement = module.name;
//# sourceMappingURL=management.js.map