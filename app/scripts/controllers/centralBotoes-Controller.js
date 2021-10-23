exibindo.controller('ctrlCentralBotoes',function($scope, $location){
    $scope.proximatela = function(){
        console.log('clicou')
        $location.path('/SegundoValor')
    }
})