function dobraVetor(X) {
  var D = Array(X.lenght)
  for(let i = 0;i<X.lenght;i++){
    D[i] = X[i] *2
  }
  return D
}
function somaVetor(X, dobra){
  let D = dobra(X)
  var soma = Array(X.lenght)
  for(let i=0;i<X.lenght;i++){
    soma[i]=X[i]+D[i]
  }
  return soma
}