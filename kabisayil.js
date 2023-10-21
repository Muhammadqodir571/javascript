function isleapYear(year){
    if(year % 4 === 0 && year % 100 !==0 || year % 400===0){
        return `${year} -yil kabisa yili hisoblanadi 366 kun bor `;
    }else{
        return `${year}  -yil 365 kun bor kabisa yili emas`;
    }
}

[300,900,1001,1200,2000,2024].forEach((year)=>{

    console.log(isleapYear(year))
})