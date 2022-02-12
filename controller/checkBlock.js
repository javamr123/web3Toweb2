var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545/"));
const schedule = require('node-schedule');


var checkBlock = async function () {

    var blockHeight = await web3.eth.getBlockNumber();

    async function sch() {
        
        try {
            blockHeight++;
            console.log(blockHeight);
            // var blockNumber = await web3.eth.getBlockTransactionCount(blockHeight);
            var transactions = await web3.eth.getBlock(blockHeight);
           // console.log(transactions);
            var transId = transactions?.transactions;
            for (var i = 0; i < transId?.length; i++) {
                var transInfo = await web3.eth.getTransaction(transId[i]);
                
                //监听引擎合约
                if (transInfo.to?.toString().toLowerCase() == '合约地址'.toString().toLowerCase()) {
                    console.log(transInfo);
                }
            }
        } catch (error) {
            console.log(error);
        }

    }

    // 定义规则
    let rule = new schedule.RecurrenceRule();
    rule.second = [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57]; // 每隔 10 秒执行一次

    // 启动任务
    schedule.scheduleJob(rule, async () => {
        sch();
    });
}



module.exports = checkBlock;