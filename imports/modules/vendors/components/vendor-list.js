import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import template from './templates/vendor-list.html';
class VendorListCtrl {
    constructor($scope, $reactive, $log) {
        'ngInject';
        $reactive(this).attach($scope);
        this.$scope = $scope;
        this.$log = $log;
    }
}
const module = angular.module('vendorList', [
    angularMeteor,
    uiRouter
]).component('vendorList', {
    template,
    controllerAs: 'vm',
    controller: VendorListCtrl
});
export const VendorList = module.name;
//# sourceMappingURL=vendor-list.js.map