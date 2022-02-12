# 创建代币

通过此接口可以随意创建自己的erc20代币。不可增发，可销毁。



接口名：

```
createCoin
```



示例：

```
接口名：http://ip:5764/metagame
参数：{
	"method": "createCoin",
	"gameId": 1,
	"name": "MyToken" //代币名称
	"symbol": "mt"  //代币缩写
	"initialSupply":  "1000000000000000000000"  // 代币总量，不可增发。要加精度，18个0，这里实际就是1000
	"privateKey": "私钥"，加密方式见首页
}
```

返回：

 ```
{
    "code": 1,
    "data": "0x0d67839cc96a5c0643c95bcda80c644d266483e69f3634a0158fc1fc9db45939",//交易hash
    "message": "成功"
}
 ```

