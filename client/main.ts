import angular from 'angular';
import { Meteor } from 'meteor/meteor';
import { uiMain } from '../imports/app/uiMain'

function onReady(){
  angular.bootstrap(document, [
    uiMain
  ], {
    strictDi: true
  });
}

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
