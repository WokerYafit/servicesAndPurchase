const mssql = require('mssql')

const sqlConfig = {
    user: "sa29",
    password: "1234",
    database: "ServicesAndPurchase",
    server: 'localhost', //Server to connect to. You can use 'localhost\instance' to connect to named instance.
    port: 1433, //Port to connect to (default: 1433). Don't set when connecting to named instance.
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false, // for azure use true
        trustServerCertificate: true // use true for local dev / self-signed certs
    }
}
const appPool = new mssql.ConnectionPool(sqlConfig)

//===============================================================
const getsCustomer = async (req, cs,ps) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await appPool.connect(); 
            let theResults = await myConnectionPoolToDB.request()
            .input("customerGiven", mssql.Int(), cs)  // '2018-01-01'
            .input("customerPs", mssql.VarChar(), ps)    // '2023-12-31'
            .execute('getCustomerDetails')

            resolve(theResults);
        }
        catch (err) {
            console.error('ERROR SENDING SP TO DB: ', err);
            reject('ERROR SENDING SP TO DB: ', err);
        }
    })
}
module.exports.getsCustomer = getsCustomer;
//===============================================================
const getServicesForCustomer = async (req,cs) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await appPool.connect(); 
            let theResults = await myConnectionPoolToDB.request()
            .input("customerGiven", mssql.Int(), cs)//cs)  // 
            .execute('getServices')

            resolve(theResults);
        }
        catch (err) {
            console.error('ERROR SENDING SP TO DB: ', err);
            reject('ERROR SENDING SP TO DB: ', err);
        }
    })
}
module.exports.getServicesForCustomer = getServicesForCustomer;

//===============================================================

const UpdateCustomerInMySql = async (req,cnum, cid,cname,chome,cstreet,cpob,ccity,czip,cphone,cemail,cpsw) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await appPool.connect(); 
            let theResults = await myConnectionPoolToDB.request()
            .input("customerNumber", mssql.Int(), cnum)  
            .input("customerId", mssql.Char(), cid)    
            .input("customerName", mssql.NVarChar(), cname)  
            .input("customerHome", mssql.SmallInt(), chome) 
            .input("customerStreet", mssql.NVarChar(), cstreet)  
            .input("customerPob", mssql.SmallInt(), cpob)    
            .input("customerCity", mssql.NVarChar(), ccity)     
            .input("customerZip", mssql.Int(), czip)    
            .input("customerPhone", mssql.VarChar(), cphone)  
            .input("customerEmail", mssql.VarChar(), cemail)    
            .input("customerPsw", mssql.VarChar(), cpsw)    
            .execute('updateCustomers')

            resolve(theResults);
        }
        catch (err) {
            console.error('ERROR SENDING SP TO DB: ', err);
            reject('ERROR SENDING SP TO DB: ', err);
        }
    })
}
module.exports.UpdateCustomerInMySql = UpdateCustomerInMySql;
//===============================================================
const getPriceForProduct = async (req,cs) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await appPool.connect(); 
            let theResults = await myConnectionPoolToDB.request()
            .input("ProductGiven", mssql.Int(), prd)
            .execute('getPrices')

            resolve(theResults);
        }
        catch (err) {
            console.error('ERROR SENDING SP TO DB: ', err);
            reject('ERROR SENDING SP TO DB: ', err);
        }
    })
}
module.exports.getPriceForProduct = getPriceForProduct;