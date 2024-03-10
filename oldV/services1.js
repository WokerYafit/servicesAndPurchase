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
                document.getElementById("displayModulnum").value= 
                dataAsObject[0].ModulNum;
                                document.getElementById("displayModulnum").value= 
                dataAsObject[0].ModulNum;
               document.querySelector("#displayModulName").value = 
                dataAsObject[0].Name;   
                document.querySelector("#displaypriceForUnit").value = 
                dataAsObject[0].priceForUnit;   
                document.querySelector("#displayAmount").value = 
                dataAsObject[0].amount;   
                document.querySelector("#displayvatPerentage").value = 
                dataAsObject[0].vatPerentage;   
                document.querySelector("#displayStartService").value = 
                dataAsObject[0].StartService;
                document.querySelector("#displayEndOfService").value = 
                dataAsObject[0].EndOfService;   
                document.querySelector("#displayProductNum").value = 
                dataAsObject[0].ProductNum;   
                document.querySelector("#displayProductName").value = 
                dataAsObject[0].ProductName;   
                document.querySelector("#displayvatPerentage").value = 
                dataAsObject[0].vatPerentage; 
                document.getElementById("displayModulnum1").value= 
     
                dataAsObject[1].ModulNum;
                
                document.querySelector("#displayModulName1").value = 
                dataAsObject[1].Name;   
                document.querySelector("#displaypriceForUnit1").value = 
                dataAsObject[1].priceForUnit;   
                document.querySelector("#displayAmount1").value = 
                dataAsObject[1].amount;   
                document.querySelector("#displayvatPerentage1").value = 
                dataAsObject[1].vatPerentage;   
                document.querySelector("#displayStartService1").value = 
                dataAsObject[1].StartService;
                document.querySelector("#displayEndOfService1").value = 
                dataAsObject[1].EndOfService;   
                document.querySelector("#displayProductNum1").value = 
                dataAsObject[1].ProductNum;   
                document.querySelector("#displayProductName1").value = 
                dataAsObject[1].ProductName;   
                document.querySelector("#displayvatPerentage1").value = 
                dataAsObject[1].vatPerentage;  

                document.querySelector("#displayModulnum").value = 
                dataAsObject[2].ModulNum;
                document.querySelector("#displayModulName").value = 
                dataAsObject[2].Name;   
                document.querySelector("#displaypriceForUnit").value = 
                dataAsObject[2].priceForUnit;   
                document.querySelector("#displayAmount").value = 
                dataAsObject[2].amount;   
                document.querySelector("#displayvatPerentage").value = 
                dataAsObject[2].vatPerentage;   
                document.querySelector("#displayStartService").value = 
                dataAsObject[2].StartService;
                document.querySelector("#displayEndOfService").value = 
                dataAsObject[2].EndOfService;   
                document.querySelector("#displayProductNum").value = 
                dataAsObject[2].ProductNum;   
                document.querySelector("#displayProductName").value = 
                dataAsObject[2].ProductName;   
                document.querySelector("#displayvatPerentage").value = 
                dataAsObject[2].vatPerentage;  

                document.querySelector("#displayModulnum").value = 
                dataAsObject[3].ModulNum;
                document.querySelector("#displayModulName").value = 
                dataAsObject[3].Name;   
                document.querySelector("#displaypriceForUnit").value = 
                dataAsObject[3].priceForUnit;   
                document.querySelector("#displayAmount").value = 
                dataAsObject[3].amount;   
                document.querySelector("#displayvatPerentage").value = 
                dataAsObject[3].vatPerentage;   
                document.querySelector("#displayStartService").value = 
                dataAsObject[3].StartService;
                document.querySelector("#displayEndOfService").value = 
                dataAsObject[3].EndOfService;   
                document.querySelector("#displayProductNum").value = 
                dataAsObject[3].ProductNum;   
                document.querySelector("#displayProductName").value = 
                dataAsObject[3].ProductName;   
                document.querySelector("#displayvatPerentage").value = 
                dataAsObject[3].vatPerentage;  

                document.querySelector("#displayModulnum").value = 
                dataAsObject[4].ModulNum;
                document.querySelector("#displayModulName").value = 
                dataAsObject[4].Name;   
                document.querySelector("#displaypriceForUnit").value = 
                dataAsObject[4].priceForUnit;   
                document.querySelector("#displayAmount").value = 
                dataAsObject[4].amount;   
                document.querySelector("#displayvatPerentage").value = 
                dataAsObject[4].vatPerentage;   
                document.querySelector("#displayStartService").value = 
                dataAsObject[4].StartService;
                document.querySelector("#displayEndOfService").value = 
                dataAsObject[4].EndOfService;   
                document.querySelector("#displayProductNum").value = 
                dataAsObject[4].ProductNum;   
                document.querySelector("#displayProductName").value = 
                dataAsObject[4].ProductName;   
                document.querySelector("#displayvatPerentage").value = 
                dataAsObject[4].vatPerentage;  

/*
                document.querySelector("#displayModulnum").value = 
                dataAsObject[5].ModulNum;
                document.querySelector("#displayModulName").value = 
                dataAsObject[5].Name;   
                document.querySelector("#displaypriceForUnit").value = 
                dataAsObject[5].priceForUnit;   
                document.querySelector("#displayAmount").value = 
                dataAsObject[5].amount;   
                document.querySelector("#displayvatPerentage").value = 
                dataAsObject[5].vatPerentage;   
                document.querySelector("#displayStartService").value = 
                dataAsObject[5].StartService;
                document.querySelector("#displayEndOfService").value = 
                dataAsObject[5].EndOfService;   
                document.querySelector("#displayProductNum").value = 
                dataAsObject[5].ProductNum;   
                document.querySelector("#displayProductName").value = 
                dataAsObject[5].ProductName;   
                document.querySelector("#displayvatPerentage").value = 
                dataAsObject[5].vatPerentage;  


                document.querySelector("#displayModulnum").value = 
                dataAsObject[6].ModulNum;
                document.querySelector("#displayModulName").value = 
                dataAsObject[6].Name;   
                document.querySelector("#displaypriceForUnit").value = 
                dataAsObject[6].priceForUnit;   
                document.querySelector("#displayAmount").value = 
                dataAsObject[6].amount;   
                document.querySelector("#displayvatPerentage").value = 
                dataAsObject[6].vatPerentage;   
                document.querySelector("#displayStartService").value = 
                dataAsObject[6].StartService;
                document.querySelector("#displayEndOfService").value = 
                dataAsObject[6].EndOfService;   
                document.querySelector("#displayProductNum").value = 
                dataAsObject[6].ProductNum;   
                document.querySelector("#displayProductName").value = 
                dataAsObject[6].ProductName;   
                document.querySelector("#displayvatPerentage").value = 
                dataAsObject[6].vatPerentage;  
           */     




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

//=====================  paymentPopup  ===========================
let  paymentPopup = document.getElementById("paymentPopup").classList;
function PaymentDetailsPopup(){
    paymentPopup.add("open-paymentPopup")
}

function PaymentDetailsPopupClose()
{paymentPopup.remove("open-paymentPopup")

}
//=============================================================
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
document.getElementById("serviceSum").value= document.getElementById("unitSum").value * document.getElementById("amount").value ; 
    var table = document.querySelector('table');
    var sum = 0;
    
    for( var i = 1; i < table.rows.length; i++ ){
        sum = sum + parseFloat( table.rows[ i ].cells[ 1 ].textContent );
    }
    document.getElementById("totalAmount").value = sum.toFixed( 3 );

}


