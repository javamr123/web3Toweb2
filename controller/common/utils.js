
/**
 * 扩展Date的Format函数
 * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
 * @param {[type]} fmt [description]
 */
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

//console.log((new Date()).Format("yyyy-MM-dd hh:mm:ss")); // 2018-08-02 21:22:07


/**
 * [getYestoday 获得昨天的格式化日期]
 * @return {[type]} [description]
 */
function getYestoday() {
    return new Date(new Date().getTime() - 1000 * 60 * 60 * 24).Format("yyyy-MM-dd")
}

/**
 * [getToday 获得今天的格式化日期]
 * @return {[type]} [description]
 */

var myDate = require('silly-datetime');
function getToday() {
    return myDate.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
}

/**
 * [getTomorrow 获得明天的格式化日期]
 * @return {[type]} [description]
 */
function getTomorrow() {
    return new Date(new Date().getTime() + 1000 * 60 * 60 * 24).Format("yyyy-MM-dd")
}


module.exports = getToday;