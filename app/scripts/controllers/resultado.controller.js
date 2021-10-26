exibindo.controller('ctrlMostrarResultado',function($scope,$location){
    
    console.log('tela resultado')

    var dadoSearch = $location.search();
    console.log(dadoSearch)
    

    if(dadoSearch.param ==  "enviarAdd"){
        soma = parseInt(dadoSearch.valor1) +  parseInt(dadoSearch.valor2)
        console.log( soma)
        $scope.resultado = soma
    }
    else if(dadoSearch.param == "enviarSub"){
        subtrai = parseInt(dadoSearch.valor1) -  parseInt(dadoSearch.valor2)
        console.log(subtrai)
        $scope.resultado = subtrai
    }else if(dadoSearch.param == "enviarMult"){
        mult = parseInt(dadoSearch.valor1) *  parseInt(dadoSearch.valor2)
        console.log(mult)
        $scope.resultado = mult
    }else if(dadoSearch.param == "enviarDiv"){
        div = parseInt(dadoSearch.valor1) /  parseInt(dadoSearch.valor2)
        console.log(div)
        $scope.resultado = div

    }else{
        
        console.log('valores nao encontro')
    }
  
    $scope.valor1  = '1° valor:'
        $scope.primeirovalor = dadoSearch.valor1

    $scope.valor2 = '2° valor:'
        $scope.segundovalor = dadoSearch.valor2
    $scope.imprimeResult = 'Resultado final'
       
    $scope.voltartela = function(){
        $location.path('/valorinicial')
    }   
})