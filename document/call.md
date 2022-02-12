# 查询合约信息

这个接口是普惠性接口，任何需要查询合约信息的方法，都可以调用这个接口。



接口名：

```
callContract
```

参数：

```
"from": 发送人地址，
"abiName": 方法名，下文的name字段内容，
"input": 方法要传入的参数，数组类型。
```



示例：

通过项目方地址查询gameId

 ```
 接口名：http://ip:1234/metagame
 参数：{
 	"method": "callContract",
 	"from": "0x0000000000000000000000000000", // 发送人地址
 	"abiName": "addressToGameId"
 	"input": "["0x0000000000000000000000000000"]",
 }
 ```

返回：

```
{
    "code": 1,
    "data": "1",  // 这个就是游戏id
    "message": "成功"
}
```



