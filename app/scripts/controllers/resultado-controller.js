exibindo.controller('ctrlMostrarResultado',function($scope,$location){
    
    console.log('tela resultado')

    var dadoSearch = $location.search();
    console.log(dadoSearch)
    

    if(dadoSearch.param ==  "enviarAdd"){
        soma = parseInt(dadoSearch.valor1) +  parseInt(dadoSearch.valor2)
            console.log( soma)
    }
    else if(dadoSearch.param == "enviarSub"){
        subtrai = parseInt(dadoSearch.valor1) -  parseInt(dadoSearch.valor2)
        console.log(subtrai)
    }else{

    }


        
    
    // switch(dadoSearch){
    //     case(globalNumeros =  'enviarAdd'):
    //        soma= parseInt(dadoSearch.valor1) +  parseInt(dadoSearch.valor2)
    //         console.log( soma)
    //     break
        
    //     case(globalNumeros =  'enviarSub'):
    //     subtrai = parseInt(dadoSearch.valor1) -  parseInt(dadoSearch.valor2)
    //     console.log(subtrai)
    //     break

    //     case(globalNumeros =  'enviarMult'):
    //     parseInt(dadoSearch.valor1) *  parseInt(dadoSearch.valor2)

    //     break

    //     case(globalNumeros =  'enviarDiv'):
    //     parseInt(dadoSearch.valor1) /  parseInt(dadoSearch.valor2)
    //     break

    // }
  

    
    $scope.valor1  = '1° valor:'
        $scope.primeirovalor = dadoSearch.valor1

    $scope.valor2 = '2° valor:'
        $scope.segundovalor = dadoSearch.valor2
   
})