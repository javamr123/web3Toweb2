/*
     web3发送交易
 */

var Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545/"));



var sendContract = async function (request, response) {

    try {
        var abiName = request.body.abiName;
        var from = request.body.from;
        var value = request.body.value;
        var input = request.body.input;
        var privateKey = request.body.privateKey;
        var to = request.body.to;
        var type = request.body.type; //1引擎合约，2代币合约

         var abi;
         if(type == 1){
            abi = require('./common/engine.json');
         }else if(type == 2){
            abi = require('./common/erc20.json');
         }

        var myContract = new web3.eth.Contract(abi, to, {
            from: from, // default from address
            gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
        })

        input = eval(input);

        var abiNmame = myContract.methods[abiName](...input);
        var encodedABI = abiNmame.encodeABI();

        var gasPrice = await web3.eth.getGasPrice();

        const createTransaction = await web3.eth.accounts.signTransaction({
            from: from,
            to: to,
            value: value *10 **18,
            data: encodedABI,
            gas: 800000,
            gasPrice: gasPrice
        },
            privateKey
        );

        web3.eth.sendSignedTransaction(createTransaction.rawTransaction);

        var successJson = JSON.stringify({
            code: 1,
            data: createTransaction.transactionHash,
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

module.exports = sendContract;