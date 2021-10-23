exibindo.controller('ctrlTelaPrimeiroValor',function($scope, $location){
    $scope.proximatela = function(){
        console.log('clicou')
        $location.path('/SegundoValor')
    }
})