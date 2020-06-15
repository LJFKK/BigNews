//index.js
$(function () {
    //登录成功跳转过来后查询信息加载到页面
    $.ajax({
        url: 'http://localhost:8080/api/v1/admin/user/info',
        dataType: 'json',
        type: 'get',
        success: function (bd) {

        }
    });
});