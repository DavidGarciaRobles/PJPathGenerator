angular.module('myApp', []).config(function($logProvider) {
    // habilitado logger debug para trazas de prueba
  $logProvider.debugEnabled(true);
});