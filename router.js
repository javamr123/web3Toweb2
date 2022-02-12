/* 
路由模块 
 */
var express = require('express');
var router = express.Router();

router.post('/web3Toweb2', function (request, response) {


    var method = request.body.method;

  
    switch (method) {
        //发送合约交易
        case 'sendContract':
            var sendContract = require('./controller/sendContract.js')
            sendContract(request, response, result[0].password);
            break;
        //查询合约信息
        case 'callContract':
            var callContract = require('./controller/callContract.js')
            callContract(request, response);
            break;
        //通过交易hash查询交易信息
        case 'transInfo':
            var transInfo = require('./controller/transInfo.js')
            transInfo(request, response);
            break;
        //批量生成用户地址
        case 'createAddress':
            var createAddress = require('./controller/createAddress.js')
            createAddress(request, response);
            break;
        //发布代币
        case 'createCoin':
            var createCoin = require('./controller/createCoin.js')
            createCoin(request, response);
            break;
        //查询账户余额
        case 'accountInfo':
            var accountInfo = require('./controller/accountInfo.js')
            accountInfo(request, response);
            break;
        default:
            var errorJson = JSON.stringify({
                code: 0,
                message: "没有此方法"
            });
            response.send(errorJson);
            break;
    }

});



module.exports = router;