function numberOn(a) {
    if(a<=9){
        return 1;
    }else if(a>=10 && a<=99){
        return 2
    }else if(a>=100 && a<=999){
        return 3
    }else{
        return 'kode xato'
    }
    
}


[8,86,120].forEach((a) => {
    console.log(numberOn(a));
})