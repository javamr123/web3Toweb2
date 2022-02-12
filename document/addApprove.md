# 增加授权额度

可以无限次数增加和减少授权额度，也可以重新调用授权功能重置授权额度。



接口名：

```
sendContract
```



Abi:

```
{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
```



示例：

```
接口名：http://ip:5764/metagame
参数：{
	"method": "sendContract",
	'abiName': "increaseAllowance"，
	'from': "0x0000000000000000000000"，
	'value': 0，
	'input': ["0x0000000000000000000", 1000000000000000000]。
	'privateKey': 私钥，加密传输，加密方式见首页。
	'to': 代币地址
	'type': 2
}
```

返回：

 ```
{
    "code": 1,
    "data": "",//交易hash
    "message": "成功"
}
 ```

