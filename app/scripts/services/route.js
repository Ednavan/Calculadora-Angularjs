angular.module("exibindo").config(function($routeProvider){
    $routeProvider.when('/valorinicial',{
        controller: 'ctrlCentralBotoes',
        templateUrl: '../app/view/centralBotoes.html'
    }).when('/SegundoValor',{
            controller: 'ctrlTelaSegundoValor',
            templateUrl: '../app/view/telaSegundoValor.html'
    }).otherwise('/valorinicial')
})