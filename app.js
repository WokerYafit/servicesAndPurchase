var express = require('express');
var app = express();
var myRepository = require("./myRepository")

app.use(express.json());

//=========================

app.post("/Customer",async (req,res)=>{
    console.log(req.body);
    var result = await myRepository.getsCustomer(req,req.body.customerGiven,req.body.customerPs);
   console.log("result is: ",result);
    res.json(result.recordset); 
});
app.use(express.static('public'));
//=========================

app.post("/servicesToCustomer",async (req,res)=>{
    console.log(req.body);
    var theResults = await myRepository.getServicesForCustomer(req,req.body.customerGiven);
   console.log("result is: ",theResults);
    res.json(theResults.recordset); 
});
app.use(express.static('public'));
//==============================================================

app.post("/CustomerUpdate",async (req,res)=>{
    console.log(req.body);
    var result = await myRepository.UpdateCustomerInMySql(req,
        req.body.customerNumber,
        req.body.customerId,
        req.body.customerName,
        req.body.customerHome,
        req.body.customerStreet,
        req.body.customerPob,
        req.body.customerCity,
        req.body.customerZip,
        req.body.customerPhone,
        req.body.customerEmail,
        req.body.customerPsw
        );
   console.log("result is: ",result);
    res.json(result.recordset); 
});


app.use(express.static('public'));
//======================================================

/*
app.push("/services.html", (req,res)=>{
    console.log(req);
    var theResults = myRepository.getServices(req,req.body.customerGiven);
   console.log("result is: ",theResults);
    res.json(theResults.recordset); 
});
app.use(express.static('public'));
*/
//==============================================================
app.listen(3001, function () {
    console.log('My app is listening on port 3001!');
    });
    app.use(express.static('public'));
    
//==============================================================



