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
       <input type="checkbox" class="serviceCheckbox" id="serviceCheckbox${i+1}"  onclick="openRenewServicePopup(${theResults.ProductNum},${theResults.UnitNum},${theResults.ModulNum})"/> 
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
<td class="column7">   
 ${theResults.price *theResults.amount}  
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
    <td class="column8">   
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
    <td hidden class="column10">   
     ${theResults.UnitNum}
    </td>
    `    
 +
    `
    <td hidden class="column11">   
         ${theResults.UnitName} 
    </td>
    ` 
    +
    `
    <td  hidden class="column0">   
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


//======================openServicePopup=================================

let  ServicePopup = document.getElementById("servicePopup").classList;
function openRenewServicePopup(theData,theData2,theData3){
console.log("the data is:",theData);
console.log("the data is:",theData2);
console.log("the data is:",theData3);
document.querySelector("#displayProductNum").innerHTML=theData;
document.querySelector("#displayUnitNum").innerHTML=theData2;
document.querySelector("#displayModulnum").innerHTML=theData3;
//document.querySelector("#unitselects").value= document.querySelector("#displayUnitNum").innerHTML;
localStorage.setItem("ProductNum", document.querySelector("#displayProductNum").innerHTML);
localStorage.setItem("UnitNum", document.querySelector("#displayUnitNum").innerHTML);
localStorage.setItem("ModuleNum", document.querySelector("#displayModulnum").innerHTML);
var prd = localStorage.getItem("ProductNum");
//document.querySelector("#displayProductNum").innerHTML;
var unt = localStorage.getItem("UnitNum");
console.log(prd,unt);


var myBody = {
    "ProductGiven":prd,
    "UnitGiven":unt

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
    document.querySelector("#unitSum").innerHTML=
 `
<div class="serviceField">
<div> ${theService.price*(theService.vat+1)} </div>
</div>
` 
localStorage.setItem("ProductNum", document.querySelector("[name='displayProductNum']").value);
localStorage.setItem("UnitNum", document.getElementsByName("[name='unitselect']").value);


if(document.querySelector("#displayUnitNum").innerHTML==1)
{
    document.getElementById("PENSIA").hidden = true;
    document.getElementById("SHKNT").selected = true;
    document.getElementById("SHKNT2").visible = true;
    document.getElementById("HISHULIT").hidden = true;
    document.getElementById("ASHAFIT").hidden = true;
    document.getElementById("SHKNT3").hidden = true;  
}
else if(document.querySelector("#displayUnitNum").innerHTML==2)
{
    document.getElementById("PENSIA").selected = true;
    document.getElementById("SHKNT").hidden = true;
    document.getElementById("SHKNT2").hidden = true;
    document.getElementById("HISHULIT").hidden = true;
    document.getElementById("ASHAFIT").hidden = true;
    document.getElementById("SHKNT3").hidden = true;
}
else if(document.querySelector("#displayUnitNum").innerHTML==3)
{
    document.getElementById("PENSIA").hidden = true;
    document.getElementById("SHKNT").visible = true;
    document.getElementById("SHKNT2").selected = true;
    document.getElementById("HISHULIT").hidden = true;
    document.getElementById("ASHAFIT").hidden = true;
    document.getElementById("SHKNT3").hidden = true;
}
else if(document.querySelector("#displayUnitNum").innerHTML==4)
{
    document.getElementById("PENSIA").hidden = true;
    document.getElementById("SHKNT").hidden = true;
    document.getElementById("SHKNT2").hidden = true;
    document.getElementById("HISHULIT").selected = true;
    document.getElementById("ASHAFIT").hidden = true;
    document.getElementById("SHKNT3").hidden = true;
}
else if(document.querySelector("#displayUnitNum").innerHTML==5)
{
    document.getElementById("PENSIA").hidden = true;
    document.getElementById("SHKNT").hidden = true;
    document.getElementById("SHKNT2").hidden = true;
    document.getElementById("HISHULIT").hidden = true;
    document.getElementById("ASHAFIT").selected = true;
    document.getElementById("SHKNT3").hidden = true;
}
else
{
    document.getElementById("PENSIA").hidden = true;
    document.getElementById("SHKNT").hidden = true;
    document.getElementById("SHKNT2").hidden = true;
    document.getElementById("HISHULIT").hidden = true;
    document.getElementById("ASHAFIT").hidden = true;
    document.getElementById("SHKNT3").selected = true;
}
}
})   
ServicePopup.add("open-servicePopup")
let  popupBackground = document.getElementById("backgroundCustomerPage").classList;
popupBackground.add("backgroundPopupOpen")  
document.getElementById("serviceCheckbox1").disabled = true;
document.getElementById("serviceCheckbox2").disabled = true;
document.getElementById("serviceCheckbox3").disabled = true;
document.getElementById("serviceCheckbox4").disabled = true;
document.getElementById("serviceCheckbox5").disabled = true;
document.getElementById("serviceCheckbox6").disabled = true;




}

//======================openRenewServicePopupCloseAndCancel======================
function openRenewServicePopupClose()
{ServicePopup.remove("open-servicePopup")
let theCheckBoxId = document.querySelector(".serviceCheckbox:checked").getAttribute("id");
let whoIsCheckedRowNum = theCheckBoxId.substring(theCheckBoxId.length-1);
document.querySelector(".serviceCheckbox:checked").checked = false; 
let  popupBackground = document.getElementById("backgroundCustomerPage").classList;
popupBackground.remove("backgroundPopupOpen")  
document.getElementById("serviceCheckbox1").disabled = false;
document.getElementById("serviceCheckbox2").disabled = false;
document.getElementById("serviceCheckbox3").disabled = false;
document.getElementById("serviceCheckbox4").disabled = false;
document.getElementById("serviceCheckbox5").disabled = false;




}

//======================openRenewServicePopupClose======================
function sendRenewService()
{ServicePopup.remove("open-servicePopup")
let theCheckBoxId = document.querySelector(".serviceCheckbox:checked").getAttribute("id");
let whoIsCheckedRowNum = theCheckBoxId.substring(theCheckBoxId.length-1); 
let  popupBackground = document.getElementById("backgroundCustomerPage").classList;
popupBackground.remove("backgroundPopupOpen")   
document.getElementById("serviceCheckbox1").disabled = false;
document.getElementById("serviceCheckbox2").disabled = false;
document.getElementById("serviceCheckbox3").disabled = false;
document.getElementById("serviceCheckbox4").disabled = false;
document.getElementById("serviceCheckbox5").disabled = false;


localStorage.setItem("ProductAmount", document.querySelector("[name='amount']").value);
localStorage.setItem("ProductSum", document.querySelector("#unitSum").value)
localStorage.setItem("UnitNum", document.getElementsByName("[name='unitselect']").value);


//=====================================================================
let  paymentPopup = document.getElementById("paymentPopup").classList;
function PaymentDetailsPopup(){

function sendcalculation()
{
var prd = document.querySelector("#displayProductNum").innerHTML;
var unt = document.getElementById("unitselects").value;
var amt = document.querySelector("[name='amount']").value;
console.log(prd,unt,amt);


var myBody = {
    "ProductGiven":prd,
    "UnitGiven":unt,
    "AmountGiven":amt
};
fetch("/TotalPriceForService",{
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
document.querySelector("#totalToPay").value = 
dataAsObject[0].TotalPrice;
localStorage.setItem("TotalSum",dataAsObject[0].TotalPrice)
})   


}
sendcalculation()

    paymentPopup.add("open-paymentPopup")

}
PaymentDetailsPopup()
}

//======================sendProductForPrice======================
function sendProductForPrice()
{
var prd = document.querySelector("#displayProductNum").innerHTML;
var unt = document.getElementById("unitselects").value;
console.log(prd,unt);


var myBody = {
    "ProductGiven":prd,
    "UnitGiven":unt

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
    document.querySelector("[name='displayProductName']").value=
    `
   <div class="serviceInput">
   <div> ${theService.Name} </div>
   </div>
   `  
    document.querySelector("#unitSum").innerHTML=
 `
<div class="serviceField">
<div> ${theService.price*(theService.vat+1)} </div>
</div>
`    
}
})   
}
//======================paymentPopup=================================

function PaymentDetailsPopupClose()
{
        var cnum = localStorage.getItem("customerId");
        var mdl = localStorage.getItem("ModuleNum");
        //var sum = localStorage.getItem("TotalSum");
        //var sum = document.querySelector("#unitSum").value
        var  amt= document.querySelector("[name='amount']").value;
        console.log(cnum, mdl,amt);
    
        var myBody = {
            "customerNumber":cnum,
            "ModuleNum":mdl,
            "AmountService":amt
        };
    
       fetch("/ServiceUpdate",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(myBody)
       })
    paymentPopup.remove("open-paymentPopup")
    let  popup = document.getElementById("popup").classList;
    popup.add("open-popup")
let  popupBackground = document.getElementById("backgroundCustomerPage").classList;
popupBackground.add("backgroundPopupOpen")  
document.getElementById("serviceCheckbox1").disabled = true;
document.getElementById("serviceCheckbox2").disabled = true;
document.getElementById("serviceCheckbox3").disabled = true;
document.getElementById("serviceCheckbox4").disabled = true;
document.getElementById("serviceCheckbox5").disabled = true

}

       
function closePopup(){
    popup.classList.remove("open-popup")
    popup.classList.remove("backgroundPopupOpen")
    document.getElementById("serviceCheckbox1").disabled = false;
document.getElementById("serviceCheckbox2").disabled = false;
document.getElementById("serviceCheckbox3").disabled = false;
document.getElementById("serviceCheckbox4").disabled = false;
document.getElementById("serviceCheckbox5").disabled = false;
 window.location = "/services.html"
}