# 查询区块链地址余额

查询区块链地址余额，以wei为单位。



接口名：

```
accountInfo
```



示例：

```
接口名：http://ip:5764/metagame
参数：{
	"method": "createCoin",
	"gameId": 1,
	"address": "地址" //
}
```

返回：

 ```
{
    "code": 1,
    "data": "1000000000000000000",//余额，wei为单位，转换ether需要去掉18个0
    "message": "成功"
}
 ```

