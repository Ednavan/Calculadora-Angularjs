angular.module("exibindo").config(function($routeProvider){
    $routeProvider.when('/valorinicial',{
        controller: 'ctrlTelaPrimeiroValor',
        templateUrl: '../app/view/telaPrimeiroValor.html'
    }).when('/SegundoValor',{
            controller: 'ctrlTelaSegundoValor',
            templateUrl: '../app/view/telaSegundoValor.html'
    }).otherwise('/valorinicial')
})