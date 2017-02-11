/*jshint undef: false, unused: false, indent: 2*/
/*global angular: false */

'use strict';

angular.module('demoApp')

    .controller('BlockController', ['$scope', 'BoardService', 'BoardDataFactory', function ($scope, BoardService, BoardDataFactory) {

        $scope.columns =  $scope.kanbanBoard = BoardDataFactory.block.columns;

        // callbacks for third party ng-sortable used to reorder the categories
        $scope.dragControlListeners = {
            //optional param

            accept: function (sourceItemHandleScope, destSortableScope, destItemScope) {
                sourceItemHandleScope;
                return true;
                //destSortableScope.$parent.phase.name
                //return sourceItemHandleScope.itemScope.sortableScope.$parent.$parent.backlog.$$hashKey === destSortableScope.$parent.$parent.backlog.$$hashKey;
            },
            containment: '#blocks'
        };
    }]);

