function digetelYI(n){
    var sum=0;
    var r;
  while (n>0) {
    r=n%10
    sum+=r
    n/=10
  
  }
  console.log(sum); 
}
digetelYI(12)