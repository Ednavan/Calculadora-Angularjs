exibindo.controller('ctrlTelaTerceiroValor', function($scope, $location){

    $scope.recebeDados = function(){
        var dadosSearch = $location.search();
        var informacoesValores = {
            valor1: dadosSearch.dados,
            valor2: $scope.infoValor2
        }
        $location.search(informacoesValores)
        console.log(informacoesValores)

        $location.path('/visualizarResultado')

    }
})
