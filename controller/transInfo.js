/*
    通过交易hash查询交易信息
*/

var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545/"));


var transInfo = async function (request, response) {

    try {
        var transactionHash = request.body.transactionHash;
        
        
        var transInfo = await web3.eth.getTransactionReceipt(transactionHash);

        var successJson = JSON.stringify({
            code: 1,
            data: transInfo,
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

module.exports = transInfo;