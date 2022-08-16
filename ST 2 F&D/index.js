function shape(){
    let val=document.getElementById("dimension").value;
    if(val=="" || val==" " || val==null)
    {
        alert("Enter a Value");
    }
    else
    {
        val=Number(val);
        let totaldigit=val.toString().length;
        if(totaldigit==5)
        {
            var sum=0;
            while(val>0){
                let rem=val%10;
                sum=sum+rem;
                val=val/10;
            }
            document.getElementById("createShape").style.width=sum+"px";
            document.getElementById("createShape").style.height=sum+"px";
            document.getElementById("createShape").style.backgroundColor="black";
            document.getElementById("createShape").style.borderRadius=sum/5+"px";
        }
        else
        {
            alert("Enter a number of 5 digits");
        }
    }
};