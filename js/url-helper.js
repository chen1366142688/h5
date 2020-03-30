/*
 * 公共 接口请求地址
 */
var H5url = 'https://patriarch-tm.tanmasports.com/static/data/page';  // 数据测试data访问地址
//var H5url = 'https://patriarch.tanmasports.com/static/data/page'//数据正式data访问地址
var appurl = 'https://patriarch-tm.tanmasports.com/gateway';  // 数据测试gateway接口地址
// var appurl = 'https://patriarch.tanmasports.com/gateway';  // 数据测试gateway接口地址


var tearchingUrl = 'https://patriarch-tm.tanmasports.com/teacher';//数据测试teacher接口地址
// var tearchingUrl = 'https://teacher-lb.tanmasports.com';//数据正式teacher接口地址
var uniRunUrl = 'https://patriarch-tm.tanmasports.com/unirun';
var shareUrl =  'https://html-test.tanmasports.com'
/*
 * 获取URL的参数值
 */
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
function ajax(url, method, data) {
  let p = function (resolve, reject) {
      $.ajax({
          url: url,
          type: method,
          dataType: "json",
          data: data == null ? '' : data,
          async: true,
          contentType: "application/json",
          success: function (resp) {
              resolve(resp);
          },
          error: function (XMLHttpRequest) {
              reject(XMLHttpRequest);
          }
      });
  };
  return p;
}

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('-')
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
