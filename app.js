/* 
	导入模块 测试
 */
var express = require('express');
var session = require('express-session'); //session插件
var bodyParser = require('body-parser');
var router = require('./router');

//挂载
var app = express();

//设置跨域访问
app.all('*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

//配置post解析
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(1234, function () { //1234
	console.log('启动成功，端口号1234')
}); 



app.use(session({
	secret: '1213而非打ew',  //配置加密字符串，他会在原有加密基础上和这个字符串拼起来去加密，目的是为了增加安全性
	resave: false,
	cookie: { maxAge: 6000 },
	saveUninitialized: true    	//true无论你是否使用Session,我都默认给你一把钥匙; false使用Session,才给你一把钥匙
}));



//调用路由
app.use(router);

//未处理的请求，404
app.use(function (request, response) {
	//所有未处理的请求都会跑到这里
	//404
})

//公开指定目录,让这个目录下的可以访问，不用手动指定访问,第一个参数是url的其中别名
app.use('public', express.static('public/img/'));


var checkBlock = require('./controller/checkBlock.js')
checkBlock();




