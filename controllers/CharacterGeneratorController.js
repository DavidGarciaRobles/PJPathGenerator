angular.module("myApp").controller('CharacterGeneratorController', ['$scope', '$log', function ($scope, $log) {

    // Generacion de NPC
    $scope.generateNPC = function () {
        $log.info('CharacterGeneratorController - starting npc generating!');
        //TODO Aplicar clase
        //TODO Repartir caracteristicas en funcion de la clase
        //TODO Aplicar raza
        //TODO Asignar dotes
        //TODO Asignar habilidades
        // ...
    }
}]);