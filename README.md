# web3Toweb2

传统程序员转web3开发会遇到很多瓶颈，对于gas等都很难去理解。

基于这几年对于同事的辅助，我总结了些功能，封装成http请求的形式提供给程序员使用，会让工作效率大为提高。



由于web3.js本身有些bug，所以需要改动：

web3-core-helpers-lib-formatters.js:206替换为：tx.gas = tx.gas.toString();



此封装做了基础功能，需要您根据您自己业务情况替换代码内部的合约地址，abi等信息
