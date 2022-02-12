/**
 * 查询用户地址余额
 */


 var Web3 = require('web3');
 var web3 = new Web3(new Web3.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545/"));
 
 
 var accountInfo = async function (request, response) {
 
     try {

         var address = request.body.address;

        var balance = await web3.eth.getBalance(address)
 
         var successJson = JSON.stringify({
            code: 1,
            data: balance,
            message: "成功"
        });
        response.send(successJson);
 
         
 
 
     } catch (error) {
         console.log(error);
         var errorJson = JSON.stringify({
             code: 0,
             message: "字段有问题"
         });
         response.send(errorJson);
     }
 
 }
 
 module.exports = accountInfo;