import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { VendorList } from './components/vendor-list';
import { VendorEntrySection } from './components/vendor-entry-section';
import { Vendor } from './model/vendor';

import template from './templates/management.html';

class VendorManagementCtrl {
  $log: any;
  $scope: any;
  vendor: Vendor;
  constructor($scope, $reactive, $log){
    'ngInject';
    $reactive(this).attach($scope);

    this.$scope = $scope;
    this.$log = $log;
  }

  addVendor(){
    this.vendor= new Vendor();
  }

  saveVendor(){
    this.$log.log(this.vendor);
    this.vendor = undefined;
  }
}

function config($stateProvider){
  'ngInject';
  $stateProvider
    .state('admin.vendors',{
      url:'/vendors',
      template:'<vendor-management></vendor-management>'
    });
}

const module = angular.module('vendorManagement',[
  angularMeteor,
  VendorList,
  VendorEntrySection,
  uiRouter
]).component('vendorManagement',{
  template,
  controllerAs: 'vm',
  controller: VendorManagementCtrl
}).config(config);

export const VendorManagement = module.name;