exibindo.controller('ctrlCentralBotoes',function($scope, $location){
  
    $scope.proximatela = function(globalNumeros){
        var recebendo = {
            preparoDeCalculos: globalNumeros,
            
        }
        console.log(recebendo)
       var recebeParametro=  $location.search(recebendo)
    
        $location.path('/SegundoValor' )
    }
})