# 批量生成用户地址

通过此接口可以批量生成用户地址，私钥已通过游戏方密码加密。



接口名：

```
createAddress
```



示例：

```
接口名：http://ip:5764/metagame
参数：{
	"method": "createAddress",
	"gameId": 1,
	"number": "5" //生成几个
}
```

返回：

 ```
{
    "code": 1,
    "data": [
        {
            "address": "0x04701cCD756c5095B357A26F946B6404B5FE54ff",
            "privateKey": "Aw2aVfVcA+PQ/DYGFL2ZQ2hmlXx9SqioEeEllvS6LYBuDYtPLI2xHbg6bsG+ARs83RG/3u5dwEPfPtGv+T20o3f/W9hoKfw+7yo6GeUXvgg="
        },
        {
            "address": "0xC34658545B0fcAb529f7F4d004966c117d5A36C9",
            "privateKey": "4UmUgE+czxVm3PzxbU/lmuJXGUNNVZTzpNOFu24Jz5B/jEf563FrjmgRF3r/hgIaYzfMVla2HA8jnWQG7mCi7JQwokT4uZb6/j7+cHp3jgg="
        },
        {
            "address": "0xB15f27500Ff00c248f79f5d8eA807201dD9ceaB6",
            "privateKey": "CL65xXOwVHL57Yc06BD0r+hh5Fzq2dcQmxvBb0vJ8OtGlQVaiP6rZ/ZzBlvbU0TvGggezbauhHv7YVc5geatOPY8Y4CmWUjtV7rdxEA/12w="
        },
        {
            "address": "0xcfbe6812655E74ec3A62BDc7F9baeB4A673b3349",
            "privateKey": "2qn2yxqu3fG8zz94N9dBK6p+hF7LbwKk5LIlyaVbvh3YpBmuRfu+ReTHyQspDVpO+AsLAvnga6lbxANGnX/WSspKIhxgvGQPdKoYkikJE3Y="
        },
        {
            "address": "0x37EB43ECb08E8A8E452fDD09945deaA82d01A03B",
            "privateKey": "dxCKdDiJEVP2rRlMOgHVwOBBzxMxoC52Cwvh7yq4IGNEkSqcTMTe+EvWCrqv9bVVBlHgfIFMo8woBlf1dCcVbyhrnv88+A4I2/Hr0LrupYw="
        }
    ],
    "message": "成功"
}
 ```

