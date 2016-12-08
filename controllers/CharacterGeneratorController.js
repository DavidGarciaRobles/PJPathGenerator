var app = angular.module("myApp",[]);

app.controller('CharacterGeneratorController', ['$scope', '$log', function ($scope, $log)
{
    $log.debug('Hello Debug!');
}]);

app.controller("CargaComboClases", function ($scope, $http)
{
    //vamos a hacer uso de $http para obtener los datos
    $http.get('http://localhost:51348/../ClasesNPC.json').success(function (data)
    {
        //enviamos los datos a la vista con el objeto $scope
        $scope.datos = data;
    });
})

app.controller("CargaComboRazas", function ($scope, $http)
{
    //vamos a hacer uso de $http para obtener los datos
    $http.get('http://localhost:51348/../Razas.json').success(function (data)
    {
        //enviamos los datos a la vista con el objeto $scope
        $scope.datos = data;
    });
})