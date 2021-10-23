angular.module("exibindo").config(function($routeProvider){
    $routeProvider.when('/SegundoValor',{
        controller: 'ctrlTelaSegundoValor',
        templateUrl: '../app/view/telaSegundoValor.html'
    })
    
    // .otherwise('/valorinicial')
})