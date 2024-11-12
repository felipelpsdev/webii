import {dobraVetor, somaVetor} from './Questao01'

var X = [10, 2, 8, 25, 15]

var resultado = somarVetor(X, dobraVetor)

var resultado2 = somaVetor(X, function(a){
    var D = Array(a.length)
    for(let i =0;i<a.length;i++){
        D[i]=a[i *2]
    }
    return D
})