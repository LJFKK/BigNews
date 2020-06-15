// 后台登录页面
$(function () {
    //登录按钮点击事件,阻止默认submit触发事件
    $('.input_sub').on('click', function (e) {
        e.preventDefault();
        //获取账号密码
        var ac = $('.input_txt').val().trim();
        var ps = $('.input_pass').val().trim();

        //非空判断
        if (ac == '' || ps == '') {
            // alert('请输入用户名或密码');
            //模态框
            $('#myModal .modal-body').text('请输入用户名或密码');
            $('#myModal').modal({
                keyboard: true
                , show: true
            })
            return;
        }
        //发送ajax 请求判断是否输入正确
        $.ajax({
            url: 'http://localhost:8080/api/v1/admin/user/login',
            data: {
                username: ac,
                password: ps
            },
            type: 'post',
            dataType: 'json',
            success: function (bd) {
                //成功跳转index首页,失败提示用户
                if (bd.code == 200) {
                    //location.href = './index.html';
                    //模态框
                    $('#myModal .modal-body').text('登录成功');
                    $('#myModal').modal({
                        keyboard: true
                        , show: true
                    });
                    $('#myModal').on('hidden.bs.modal', function (e) {
                        console.log(bd.token);
                        localStorage.setItem('token', bd.token);
                        location.href = './index.html';
                    });
                } else {
                    $('#myModal .modal-body').text('登录成功');
                    $('#myModal').modal({
                        keyboard: true
                        , show: true
                    });
                    $('#myModal').on('hidden.bs.modal', function (e) {
                        // location.href = './index.html';
                        alert(bd.msg);
                    });
                }
            }
        });

    });
});