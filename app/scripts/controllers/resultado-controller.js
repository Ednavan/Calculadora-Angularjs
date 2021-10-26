exibindo.controller('ctrlMostrarResultado',function($scope,$location){
    
    var dadoSearch = $location.search();
    console.log(dadoSearch)




    $scope.valor1  = '1° valor:'
        $scope.primeirovalor = dadoSearch.valor1

    $scope.valor2 = '2° valor:'
        $scope.segundovalor = dadoSearch.valor2

        
})