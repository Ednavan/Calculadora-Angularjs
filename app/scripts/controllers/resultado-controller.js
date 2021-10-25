exibindo.controller('ctrlMostrarResultado',function($scope,$location){
    
    var dadoSearch = $location.search();
    console.log(dadoSearch)

    var somaDeValoe;
    var subtraiDeValoe
    switch (somaDeValoe) {
        case somaDeValoe:
            somaDeValoe = (parseInt(dadoSearch.valor1) + (parseInt(dadoSearch.valor2)))
            $scope.result = somaDeValoe
            console.log(somaDeValoe)
        case (Subtrair):
                subtraiDeValoe = (parseInt(dadoSearch.valor1) - (parseInt(dadoSearch.valor2)))
                $scope.result = subtraiDeValoe
                console.log(subtraiDeValoe)
            break;
            
    

        
    
            default:
                break;
    }



    $scope.valor1  = 'valor1'
        $scope.primeirovalor = dadoSearch.valor1

    $scope.valor2 = 'valor2'
        $scope.segundovalor = dadoSearch.valor2

    
    
})