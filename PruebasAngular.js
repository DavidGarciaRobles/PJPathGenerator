//Comienzo para Trabajar con Angular.
//
//
controller
('HomeCtrl',
    ['$scope', '$http', function ($scope, $http)
        {
            $http.get('news/abc.json').success
            (function (data)
                {
                    $scope.news = data;
                }
            );
            $scope.holderSize = 18;
            $scope.holderLink = 'http://placehold.it/' + $scope.holderSize + 'x' + $scope.holderSize;
            $scope.boxSpan = getRandomSpan();

            function getRandomSpan()
            {
                return Math.floor((Math.random() * 18) + 1);
            };
        }
    ]
)