'use strict';
/* global angular */

angular.module('risevision.common.svg', ['risevision.common.svg.icons'])
  .directive('svgIcon', ['iconsList', function(iconsList) {
    return {
      restrict: 'E',
      scope: {
        p: '@',
      },
      link: function($scope, element) {
        function path(icon) {
          return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">' + 
          '<path d="' + iconsList.icons1[icon] + '"/>' + 
          '<path d="' + iconsList.icons2[icon] + '"/>' +
          '</svg>';
        }

        $scope.$watch('p', function(p) {
          if (p) {
            element.html( path(p) );
          }
        });
      }
    };
  }]);
