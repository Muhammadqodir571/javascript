const arr=[1,2,3,4,5]

function greqtOff(n){
    if(n==arr[0]+arr[1] || n==arr[0]+arr[2] || n==arr[0]+arr[3]|| n==arr[0]+arr[4]){
        console.log(n);
    }else if(n==arr[1]+arr[0] || n==arr[1]+arr[2] || n==arr[1]+arr[3]|| n==arr[1]+arr[4]){
        console.log(n);
    }else if(n==arr[2]+arr[0] || n==arr[2]+arr[1] || n==arr[2]+arr[3]|| n==arr[3]+arr[4]){
        console.log(n);
    }else if(n==arr[3]+arr[0] || n==arr[3]+arr[1] || n==arr[3]+arr[2]|| n==arr[3]+arr[4]){
        console.log(n);
    }else if(n==arr[4]+arr[0] || n==arr[4]+arr[1] || n==arr[4]+arr[2]|| n==arr[4]+arr[3]){
        console.log(n);
    }else{
        console.log('xato dastur');
    }

}

greqtOff(3)