var app = angular.module('myApp', ['pascalprecht.translate']).config(function($logProvider) {
    // habilitado logger debug para trazas de prueba
  $logProvider.debugEnabled(true);
});
app.config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
});
app.config(function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        files: [{
            prefix: '/resources/i18n/locale-',
            suffix: '.json'
        }]
    });
    $translateProvider.preferredLanguage('es_ES');
});