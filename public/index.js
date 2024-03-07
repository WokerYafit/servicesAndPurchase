/*const { response } = require("express");*/
window.addEventListener("load",removeCustDetails)
function removeCustDetails()
{
    localStorage.removeItem("customerId");
    localStorage.removeItem("customerPS");
}
//saveCustDetails()

function sendDesiredCustomerForReport()
{
    //debugger
    var cs = document.querySelector("[name='custNum']").value;
    var ps = document.querySelector("[name='custpsw']").value;

    console.log(cs, ps);

    var myBody = {
        "customerGiven":cs,
        "customerPs":ps
    };

   fetch("/Customer",{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myBody)
   })
   .then((dataFromServer)=>{
    return dataFromServer.json();
    
   })
   .then((dataAsObject)=>{
    if (document.querySelector("[name='custNum']").value== 
    dataAsObject[0].CustomerNum && 
    document.querySelector("[name='custpsw']").value== 
    dataAsObject[0].password
    )
    { window.location = "/services.html"
}


else  {
        window.alert("שם המשתמש או הססמה שגוים");
       (window.location = "/index.html")
}
    
})

   localStorage.setItem("customerId", document.querySelector("[name='custNum']").value);
   localStorage.setItem("customerPS", document.querySelector("[name=custpsw]").value);
}

//===========================================
