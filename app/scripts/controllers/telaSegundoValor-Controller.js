exibindo.controller('ctrlTelaSegundoValor',function($scope, $location){

        
    // $scope.recebeDados = function(globalNumeros){
    //     var dadoSearch = $location.search()
        
    //     var infromacoesParaEnviar = {
    //         v: dadoSearch.preparoDeCalculos,
    //         dados: $scope.InfoValor1,
    //     }
    //     console.log(globalNumeros)
        
    //     console.log(infromacoesParaEnviar)
    //     $location.search(infromacoesParaEnviar)

    //     // $location.path('/TerceiroValor')
    
    $scope.recebeDados = function(){
        var verDados = $location.search()
        console.log('edit', verDados)
        var infromacoesParaEnviar = {
            valor: verDados.preparoDeCalculos
            
                  
              }
           
        console.log(infromacoesParaEnviar)
    }
 
})


