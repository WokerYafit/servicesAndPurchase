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
            document.querySelector("#displayDataFromDatabase").innerHTML +=
            `
      <div class="oneRowUsers">
               <div > ${theResults.ModulNum} </div>
                <div> ${theResults.Name} </div>
                <div> ${theResults.priceForUnit} </div>
                <div> ${theResults.amount} </div>
                <div> ${theResults.vatPerentage} </div>
                <div> ${theResults.StartService} </div>
                <div> ${theResults.EndOfService} </div>
                <div> ${theResults.ProductNum} </div>
                <div${theResults.ProductName} </div>
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

//======================paymentPopup=================================
let  paymentPopup = document.getElementById("paymentPopup").classList;
function PaymentDetailsPopup(){
    paymentPopup.add("open-paymentPopup")
}
function PaymentDetailsPopupClose()
{paymentPopup.remove("open-paymentPopup")

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
document.getElementById("serviceSum").value= document.getElementById("unitSum").value * document.getElementById("amount").value ; 
}
//======================sendProductForPrice======================
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


