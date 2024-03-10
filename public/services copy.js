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


            let myObj = JSON.stringify(theResults);

            // create new row for our table
            let oneRowHTMLStr =
 `<tr class="oneRow">`

+
    `
    <td class="column0">   
       <input type="checkbox" class="serviceCheckbox" id="serviceCheckbox${i+1}"  onclick="openRenewServicePopup(${theResults.ProductNum})"/> 
    </td>
    ` 
    +
    `
    <td  hidden class="column1">   
        ${theResults.ModulNum} 
    </td>
    `    
+
    `
    <td class="column2">   
     ${theResults.Name}
    </td>
    `    
+
    `
    <td class="column3">   
     ${theResults.priceForUnit}
    </td>
    `    
    +
    `
    <td class="column4">   
     ${theResults.amount} 
    </td>
    `    
   +
    `
    <td class="column5">   
     ${theResults.vatPerentage}  
    </td>
    `    
+
    `
    <td class="column6">   
     ${theResults.StartService}  
    </td>
    `    
+
    `
    <td class="column7">   
     ${theResults.EndOfService} 
    </td>
    `    
    
+
`
<td class="column0">   
   <img src="/Images/downloadButton.jpg" id="serviceImg${i+1}"  class="imgDownloadButton">
</td>
` 
+
    `
    <td hidden class="column8">   
     ${theResults.ProductNum}
    </td>
    `    
 +
    `
    <td hidden class="column9">   
         ${theResults.ProductName} 
    </td>
    ` 

    
    +
    `
    <td class="column0">   
       <input type="int" disable   id="serviceSum${theResults.ModulNum}"/> 
    </td>
    ` 
    +
    `</tr>`; // closing oneRow td
    
    
    document.querySelector("#table tbody").innerHTML += oneRowHTMLStr;
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
//======================servicePopup=================================

let  ServicePopup = document.getElementById("servicePopup").classList;
function openRenewServicePopup(theData){
console.log("the data is:",theData);
document.querySelector("#displayProductName").innerHTML=theData;
    ServicePopup.add("open-servicePopup")
}

//======================openRenewServicePopupCloseAndCancel======================
function openRenewServicePopupClose()
{ServicePopup.remove("open-servicePopup")
document.getElementById("serviceCheckbox").checked = false; 
}

//======================openRenewServicePopupClose======================
function sendRenewService()
{ServicePopup.remove("open-servicePopup")
let theCheckBoxId = document.querySelector(".serviceCheckbox:checked").getAttribute("id");
let whoIsCheckedRowNum = theCheckBoxId.substring(theCheckBoxId.length-1);
document.querySelector(`#serviceSum${whoIsCheckedRowNum}`).value= document.getElementById("unitSum").value * document.getElementById("amount").value ; 
document.querySelector(".serviceCheckbox:checked").checked = false; 
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


