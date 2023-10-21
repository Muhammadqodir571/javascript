function numberOff(n){



if(n<10){
    console.log('1');

}else if(n<100 && n>9){
    console.log('2')

}else if(n>=100 && n<999){
    console.log('3');
}else if(n>999 && n<9999){
    console.log('4')
}else{
    console.log('5');
}
}

numberOff(12345)