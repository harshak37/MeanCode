function calculatep()
    {
       
       var a = document.getElementById("bp").value ;    
       var b = document.getElementById("edi").value;
       var a = document.getElementById("sm").value ;    
       var b = document.getElementById("mm").value;
       var a = document.getElementById("svc").value ;    
       var b = document.getElementById("tax").value;

       var sum = parseInt(a) + parseInt(b); 
       //window.alert (x);
      document.getElementById("disp").innerHTML = "Total $:" + sum  + "" + "sgd";
      
       // return a;  
     }