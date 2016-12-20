import angular from 'angular';
import angularMeteor from 'angular-meteor';

function validateEmail(){
  function link($scope, $element, $attrs, $ctrl){
    let emailPattern = /([a-zA-Z0-9_.]{1,})((@[a-zA-Z]*)[\\\.]([a-zA-Z]{2,3}))/;
    function emailParser(viewValue){
        let isValid = emailPattern.test(viewValue.trim());
        $ctrl.$setValidity('email', isValid);
        return isValid? viewValue: undefined;
    }
    $ctrl.$parsers.unshift(emailParser);
  }

  return {
    require: 'ngModel',
    link: link
  }
}

function validateUserName(){

  function link($scope, $element, $attrs, $ctrl){
      function userNameParser(viewValue){
          let isValid = /\s/g.test(viewValue.trim());
          $ctrl.$setValidity('username', !isValid);
          return (!isValid)? viewValue: undefined
      }
      $ctrl.$parsers.unshift(userNameParser);
  }

  return {
    require: 'ngModel',
    link: link
  }
}

const module = angular.module('validators',[
  angularMeteor
])
  .directive('validateEmail', validateEmail)
  .directive('validateUserName', validateUserName);

export const Validators = module.name;