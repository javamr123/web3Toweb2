/*
    通过交易hash查询交易信息
*/
var query = require('../database.js');

var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545/"));


var createAddress = async function (request, response) {

    try {
        var number = request.body.number;
        var address = [];

        for(var i=0; i < number; i++){
            var addr = await web3.eth.accounts.create();

            address.push(addr);
        }
        

        var successJson = JSON.stringify({
            code: 1,
            data: address,
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

module.exports = createAddress;