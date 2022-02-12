# 通过交易hash查询交易信息

通过此接口可以查看交易是否成功。



接口名：

```
transInfo
```



示例：

```
接口名：http://ip:5764/metagame
参数：{
	"method": "transInfo",
	"gameId": 1,
	"transactionHash": "0x2a9fade6cdef6bc7961a36d6a7a919bf25667714f1cd542e1430cafd93937aab"
}
```

返回：

 ```
{
    "code": 1,
    "data": {
        "blockHash": "0x9f5ce6357e3ba18b982f91a98f24de3ff0f261228f5dcbf358f823676a002609",
        "blockNumber": 16650584,
        "contractAddress": null,
        "cumulativeGasUsed": 4164574,
        "from": "0xf474cf03cceff28abc65c9cbae594f725c80e12d",
        "gasUsed": 27973,
        "logs": [
            {
                "address": "0x0000000000000000000000000000000000001000",
                "topics": [
                    "0x627059660ea01c4733a328effb2294d2f86905bf806da763a89cee254de8bee5"
                ],
                "data": "0x00000000000000000000000000000000000000000000000000120303d51ca000",
                "blockNumber": 16650584,
                "transactionHash": "0x2a9fade6cdef6bc7961a36d6a7a919bf25667714f1cd542e1430cafd93937aab",
                "transactionIndex": 15,
                "blockHash": "0x9f5ce6357e3ba18b982f91a98f24de3ff0f261228f5dcbf358f823676a002609",
                "logIndex": 48,
                "removed": false,
                "id": "log_68bba5c8"
            },
            {
                "address": "0x0000000000000000000000000000000000001000",
                "topics": [
                    "0x93a090ecc682c002995fad3c85b30c5651d7fd29b0be5da9d784a3302aedc055",
                    "0x000000000000000000000000f474cf03cceff28abc65c9cbae594f725c80e12d"
                ],
                "data": "0x00000000000000000000000000000000000000000000000000a21b227e01a000",
                "blockNumber": 16650584,
                "transactionHash": "0x2a9fade6cdef6bc7961a36d6a7a919bf25667714f1cd542e1430cafd93937aab",
                "transactionIndex": 15,
                "blockHash": "0x9f5ce6357e3ba18b982f91a98f24de3ff0f261228f5dcbf358f823676a002609",
                "logIndex": 49,
                "removed": false,
                "id": "log_7afbf56b"
            }
        ],
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000002010000000000000000000000000000000000020000200000000000000000000080000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000020000000000000000000000000000000000000000800000000000000000000000000100000000000000000000000000000000000000000000000000002000000000000000000000000010000000000000000000000000000000000000000000000",
        "status": true,   //交易是否成功
        "to": "0x0000000000000000000000000000000000001000",
        "transactionHash": "0x2a9fade6cdef6bc7961a36d6a7a919bf25667714f1cd542e1430cafd93937aab",
        "transactionIndex": 15,
        "type": "0x0"
    },
    "message": "成功"
}
 ```

