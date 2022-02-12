/*
    查询合约
*/

var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545/"));

var abi = require('./common/engine.json')



var callContract = async function (request, response) {

    try {
        var abiName = request.body.abiName;
        var from = request.body.from;
        var input = request.body.input;
        var contract = request.body.contract;

        var myContract = new web3.eth.Contract(abi, contract, {
            from: from, // default from address
            gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
        })

        input = eval(input);
        
        var result = await myContract.methods[abiName](...input).call();

        var successJson = JSON.stringify({
            code: 1,
            data: result,
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

module.exports = callContract;