//===========================================
window.addEventListener("load",sendDesiredCustomerForUpdate)
//===========================================
function sendDesiredCustomerForUpdate()
{
    var cs = localStorage.getItem("customerId") ;
    var ps = localStorage.getItem("customerPS") ;

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
     // body: JSON.stringify({myBody:document.querySelector("").value})
   })
   .then((dataFromServer)=>{
    return dataFromServer.json();
   })
   .then((dataAsObject)=>{
    document.querySelector("#custDetailsNum").value = 
    dataAsObject[0].CustomerNum;

    document.querySelector("#custDetailsId").value = 
    dataAsObject[0].Id;

    document.querySelector("#custDetailsName").value = 
    dataAsObject[0].CustomerName;

    document.querySelector("#custDetailsStreet").value = 
    dataAsObject[0].Street;

    document.querySelector("#custDetailsHome").value = 
    dataAsObject[0].HomeNum;

    document.querySelector("#custDetailsPob").value = 
    dataAsObject[0].POB;

    document.querySelector("#custDetailsCity").value = 
    dataAsObject[0].City;

    document.querySelector("#custDetailsZip").value = 
    dataAsObject[0].ZipCode;
    
    document.querySelector("#custDetailsPhone").value = 
    dataAsObject[0].phone;   
    
    document.querySelector("#custDetailsEmail").value = 
    dataAsObject[0].Email;
    
    document.querySelector("#custDetailsPass").value = 
    dataAsObject[0].password;
})
}

sendDesiredCustomerForUpdate()
   //===========================================
function sendDesiredCustomerUpdate()
{
    var cnum = document.querySelector("#custDetailsNum").value;
    var cid = document.querySelector("#custDetailsId").value;
    var cname = document.querySelector("#custDetailsName").value;
    var cstreet = document.querySelector("#custDetailsStreet").value;
    var chome = document.querySelector("#custDetailsHome").value;
    var ccity = document.querySelector("#custDetailsCity").value;
    var cpob = document.querySelector("#custDetailsPob").value;
    var czip = document.querySelector("#custDetailsZip").value;
    var cphone = document.querySelector("#custDetailsPhone").value;
    var cemail = document.querySelector("#custDetailsEmail").value;
    var cpsw = document.querySelector("#custDetailsPass").value;




    console.log(cnum, cid,cname,chome,cstreet,cpob,ccity,czip,cphone,cemail,cpsw);

    var myBody = {
        "customerNumber":cnum,
        "customerId":cid,
        "customerName":cname,
        "customerHome":chome,
        "customerStreet":cstreet,
        "customerPob":cpob,
        "customerCity":ccity,
        "customerZip":czip,
        "customerPhone":cphone,
        "customerEmail":cemail,
        "customerPsw":cpsw
    };

   fetch("/CustomerUpdate",{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myBody)
   })
   document.getElementById("custDetailsId").disabled = true; 
   document.getElementById("custDetailsName").disabled = true;
   document.getElementById("custDetailsStreet").disabled = true;
   document.getElementById("custDetailsHome").disabled = true;
   document.getElementById("custDetailsCity").disabled = true;
   document.getElementById("custDetailsPob").disabled = true;
   document.getElementById("custDetailsZip").disabled = true;
   document.getElementById("custDetailsPhone").disabled = true;
   document.getElementById("custDetailsEmail").disabled = true;
   document.getElementById("custDetailsPass").disabled = true;
let  popup = document.getElementById("popup").classList;
       popup.add("open-popup")

let  popupBackground = document.getElementById("backgroundCustomerPage").classList;
popupBackground.add("backgroundPopupOpen")  
}

       
function closePopup(){
    popup.classList.remove("open-popup")
    popup.classList.remove("backgroundPopupOpen")
    document.getElementById("custDetailsId").disabled = false;   
    document.getElementById("custDetailsName").disabled = false;
    document.getElementById("custDetailsStreet").disabled = false;
    document.getElementById("custDetailsHome").disabled = false;
    document.getElementById("custDetailsCity").disabled = false;
    document.getElementById("custDetailsPob").disabled = false;
    document.getElementById("custDetailsZip").disabled = false;
    document.getElementById("custDetailsPhone").disabled = false;
    document.getElementById("custDetailsEmail").disabled = false;
    document.getElementById("custDetailsPass").disabled = false;
}

//===========================================


