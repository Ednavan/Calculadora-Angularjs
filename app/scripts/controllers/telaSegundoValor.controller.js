exibindo.controller('ctrlTelaSegundoValor',function($scope, $location){
    $scope.inputTitulo1 = '1° valor:'
    $scope.recebeDados = function(globalNumeros){
        var verDados = $location.search()
        console.log('edit', verDados)
        var infromacoesParaEnviar = {
            valor: verDados.preparoDeCalculos,
            dados: $scope.InfoValor1,    
                  
        }
                 
        console.log(infromacoesParaEnviar)
        $location.search(infromacoesParaEnviar)
        
         $location.path('/TerceiroValor')
    }

    $scope.voltartela = function(){
        $location.path('/valorinicial')
    }
})


