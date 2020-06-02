//Anthony Rodriguez Ledezma 207720941
function guayaba(n){
for(let j=0; j<=n; j++){
var number=j;
  for(let i=1; i<=j-1; i++){
  number=number*i;

  }   
  console.log(j+"!= "+number);
}
}

var n = prompt("Ingrese el numero n");
guayaba(n);
