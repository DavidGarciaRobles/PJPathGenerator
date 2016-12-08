angular.module("myApp").controller('CharacterGeneratorController', ['$scope', '$log', function ($scope, $log) {
    $log.debug('Hello Debug!');

    // Generacion de NPC
    $scope.generateNPC = function () {
        $log.info('CharacterGeneratorController - starting npc generating!');
    }
}]);