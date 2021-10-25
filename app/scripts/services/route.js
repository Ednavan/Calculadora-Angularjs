angular.module("exibindo").config(function($routeProvider){
    $routeProvider.when('/valorinicial',{
        controller: 'ctrlCentralBotoes',
        templateUrl: '../app/view/centralBotoes.html'
    }).when('/SegundoValor',{
            controller: 'ctrlTelaSegundoValor',
            templateUrl: '../app/view/telaSegundoValor.html'
    }).when('/TerceiroValor',{
        controller: 'ctrlTelaTerceiroValor',
        templateUrl: '../app/view/telaTerceiroValor.html'
    }).when('/visualizarResultado',{
        controller: 'ctrlMostrarResultado',
        templateUrl: '../app/view/telaResultado.html'
    })
    
    .otherwise('/valorinicial')
})