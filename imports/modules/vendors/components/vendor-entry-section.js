import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import template from './templates/vendor-entry-section.html';
class VendorEntrySectionCtrl {
    constructor($scope, $reactive, $log) {
        'ngInject';
        $reactive(this).attach($scope);
        this.$scope = $scope;
        this.$log = $log;
    }
}
const module = angular.module('vendorEntrySection', [
    angularMeteor,
    uiRouter
]).component('vendorEntrySection', {
    template,
    controllerAs: 'vm',
    controller: VendorEntrySectionCtrl,
    bindings: {
        vendor: '=?'
    }
});
export const VendorEntrySection = module.name;
//# sourceMappingURL=vendor-entry-section.js.map