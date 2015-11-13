/**
 * Created by mdepe on 18/09/2015.
 */
angular.module('Mymodule.directive.mydirective', [])
    .directive('my-directive', [function () {
            return {
                restrict: 'E',
                scope: true,
                templateUrl: 'templates/directives/mydirective.html',
                link: function ($scope, element, attributes) {
                    console.log('mydirective');
        }]);

