function Call(n){
    if(n==1)
        document.getElementById("1B").value = (document.getElementById("1A").value)*0.33;
    else if(n==2)
        document.getElementById("2B").value = (document.getElementById("2A").value)*0.4;
    else if(n==3)
        document.getElementById("3B").value = (document.getElementById("3A").value)*0.25;
    else if(n==4)
        document.getElementById("4B").value = (document.getElementById("4A").value)*1.25;
    document.getElementById("Tot").value =((document.getElementById("1B").value)*1+(document.getElementById("2B").value)*1+(document.getElementById("3B").value)*1+(document.getElementById("4B").value)*1)
    }