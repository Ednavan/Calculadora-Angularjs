exibindo.controller('ctrlTelaSegundoValor',function($scope, $location){
    $scope.segundo= "tela 22222"

    $scope.recebeDados=function(somando){
       
        var infromacoesParaEnviar = {
            dados: $scope.InfoValor1,
            
        }

        $location.search(infromacoesParaEnviar)
        console.log(infromacoesParaEnviar)

        $location.path('/TerceiroValor')
    }
})