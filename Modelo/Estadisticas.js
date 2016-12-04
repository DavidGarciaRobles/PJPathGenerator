function Estadisticas($scope)
{
    $scope.Estadisticas =
    [
        { Fuerza },
        { Destreza },
        { Constitucion },
        { Inteligencia },
        { Sabiduria },
        { Carisma }
    ];

    function CalculoEstadisticasBase($scope)
    {
        var nEstadisticas = 1;
        var aleatorio = Math.random(18) + 1;
        for (nEstadisticas; nEstadisticas < 7; nEstadisticas + 1)
        {
            while (aleatorio < 8)
            {
                aleatorio = Math.random(18) + 1;
            }
            switch (nEstadisticas)
            {
                case 1:
                    $scope.Fuerza = aleatorio;
                case 2:
                    $scope.Destreza = aleatorio;
                case 3:
                    $scope.Constitucion = aleatorio;
                case 4:
                    $scope.Inteligencia = aleatorio;
                case 5:
                    $scope.Sabiduria = aleatorio;
                case 6:
                    $scope.Carisma= aleatorio;
            }
        }
    }
}