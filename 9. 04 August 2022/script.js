

function clicked(){
    console.log("clicked");

    let ele = document.getElementById("inpt");
    let num = ele.value;
    let sum = 0;
    for(let i=1; i<=num; ++i){
        if(i%2==0){
            console.log(i);
            sum+=i;
        }
    }

    document.getElementById("ans").innerHTML = sum;
}