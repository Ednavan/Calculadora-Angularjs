exibindo.controller('ctrlCentralBotoes',function($scope, $location){
  
    $scope.proximatela = function(globalNumeros){
        var recebendo = {
            preparoDeCalculos: globalNumeros,
            
        }
        console.log(recebendo)
       var a=  $location.search(recebendo)
       console.log(a)
        $location.path('/SegundoValor' )
    }
})