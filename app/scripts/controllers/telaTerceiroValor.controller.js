exibindo.controller('ctrlTelaTerceiroValor', function($scope, $location){
    console.log('tela terceiro valor')
    $scope.recebeDados = function(globalNumeros){
        var param = $location.search()
        var dadosSearch = $location.search();
        var informacoesValores = {
            valor1: dadosSearch.dados,
            valor2: $scope.infoValor2,
            param: param.valor,
        }
        $location.search(informacoesValores)
        console.log(informacoesValores)
       var c = $location.search(informacoesValores)
       console.log(c)
        $location.path('/visualizarResultado')

    }

    $scope.voltartela = function(){
        $location.path('/valorinicial')
    }
})
