//debugger
/*window.addEventListener("load",doInitilizations)


function doInitilizations()
{

    sendServicesAndCustomerDetailsReport();
}

*/
window.addEventListener("load",sendServicesAndCustomerDetailsReport)
function sendServicesAndCustomerDetailsReport()
{
    var cs =localStorage.getItem("customerId") ;
    console.log("innside send srvc and cstmr dtl reprt, cs=",cs);

    var myBody = {
        "customerGiven":cs,
    };

   fetch("/servicesToCustomer",{
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
    console.log("inside then of fetch dataAsObj=",dataAsObject);
    var theArr = dataAsObject;
   
        for (let i = 0; i < theArr.length; i++) {
            var theResults = theArr[i];
            console.log(theResults);
    document.querySelector("#displayModulnum").innerHTML +=
    `
    <div class= "column1">   
        <div id=Name> ${theResults.ModulNum}  </div>
    </div>
    `    
    document.querySelector("#displayModulName").innerHTML +=
    `
    <div class= "column2">   
        <div id=Name> ${theResults.Name}  </div>
    </div>
    `    
    document.querySelector("#displaypriceForUnit").innerHTML +=
    `
    <div class= "column3">   
        <div id=Name> ${theResults.priceForUnit}  </div>
    </div>
    `    
    document.querySelector("#displayAmount").innerHTML +=
    `
    <div class= "column4">   
        <div id=Name> ${theResults.amount}  </div>
    </div>
    `    
    document.querySelector("#displayvatPerentage").innerHTML +=
    `
    <div class= "column5">   
        <div id=Name> ${theResults.vatPerentage}  </div>
    </div>
    `    
    document.querySelector("#displayStartService").innerHTML +=
    `
    <div class= "column6">   
        <div id=Name> ${theResults.StartService}  </div>
    </div>
    `    
    document.querySelector("#displayEndOfService").innerHTML +=
    `
    <div class= "column7">   
        <div id=Name> ${theResults.EndOfService}  </div>
    </div>
    `    

    document.querySelector("#displayProductNum").innerHTML +=
    `
    <div class= "column8">   
        <div id=Name> ${theResults.ProductNum}  </div>
    </div>
    `    
    document.querySelector("#displayProductName").innerHTML +=
    `
    <div class= "column9">   
        <div id=Name> ${theResults.ProductName}  </div>
    </div>
    `     
        }
    })
}


{
    var cs = localStorage.getItem("customerId");
    var ps = localStorage.getItem("customerPS");
    console.log(cs,ps);

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
    console.log(dataAsObject);
    var theArr = dataAsObject;
   
    for (let i = 0; i < theArr.length; i++) {
        var theService = theArr[i];
        console.log(theService);
        document.querySelector("#displayCustNum").innerHTML +=
 `
<div class="customerHeader">
<div> ${theService.CustomerNum} </div>
</div>
`    
document.querySelector("#displayCustId").innerHTML +=
 `
<div class="customerHeader">
<div> ${theService.Id} </div>
</div>
`    
document.querySelector("#displayName").innerHTML +=
 `
<div class="customerHeader">
<div> ${theService.CustomerName} </div>
</div>
`    
}
   })
}

//===========================================
let  paymentPopup = document.getElementById("paymentPopup").classList;
function PaymentDetailsPopup(){
    paymentPopup.add("open-paymentPopup")
}
//var email = document.querySelector("[name='custNum']").value;
function PaymentDetailsPopupClose()
{paymentPopup.remove("open-paymentPopup")

}
//===========================================
function sendProductForPrice()
{
var cs = localStorage.getItem("ProductGiven");
console.log(prd);

var myBody = {
    "ProductGiven":prd

};
fetch("/PriceForProductAndUnit",{
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
console.log(dataAsObject);
var theArr = dataAsObject;

for (let i = 0; i < theArr.length; i++) {
    var theService = theArr[i];
    console.log(theService);
    document.querySelector("[name='productName']").value=theService.Name
    document.querySelector("[name='unitName']").value=theService.UnitName
    document.querySelector("[name='unitNum']").value=theService.UnitNum
    document.querySelector("[name='price']").value=theService.price
    document.querySelector("[name='vat']").value=theService.vat
    document.querySelector("[name='sumForUnit']").value=(1+theService.vat)*theService.price
}
})
}
let  ServicePopup = document.getElementById("servicePopup").classList;
function openRenewServicePopup(){
    ServicePopup.add("open-servicePopup")
}
function openRenewServicePopupClose()
{ServicePopup.remove("open-servicePopup")
document.getElementById("serviceCheckbox").checked = false; 
}

function sendRenewService()
{ServicePopup.remove("open-servicePopup")
document.getElementById("serviceCheckbox").checked = false; 
}


