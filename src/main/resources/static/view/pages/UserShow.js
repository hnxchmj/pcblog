const UserShow = {
    name: 'UserShow',
    template: '<div class="isqq">\
            <el-container class="is-vertical">\
                <el-header style = "height: 36px;">\
                    <el-button type="text" class = "button" @click="toMypage" >黄孟军</el-button>\
                    <el-button type="text" class = "button" @click="login" >登录</el-button>\
                    <el-button type="text" class = "button" @click="register" >注册</el-button>\
                </el-header>\
                <el-main>\
                        <table >\
                            <tr>\
                                <td ><div><h2>{{username}}</h2></div>\</td>\
                                <td><label>编辑</label></td>\
                            </tr>\
                            <tr>\
                                <td><label>用户名:</label></td>\
                                <td><div class = "user-info">{{username}}</div></td>\
                            </tr>\
                            <tr>\
                                <td><label>邮箱:</label></td>\
                                <td><div class = "user-info">{{email}}</div></td>\
                            </tr>\
                            <tr>\
                                <td><label>性别:</label></td>\
                                <td><div class = "user-info">{{sex}}</div></td>\
                            </tr>\
                            <tr>\
                                <td><label>生日:</label></td>\
                                <td><div class = "user-info">{{birthday}}</div></td>\
                            </tr>\
                            <tr>\
                                <td><label>手机:</label></td>\
                                <td><div class = "user-info">{{phone}}</div></td>\
                            </tr>\
                        </table>\
                </el-main>\
                <el-footer style="height: 30px;"></el-footer>\
            </el-container>\
            </div>',
    data: function () {
        return personData;
    },
    created: function () {

    },
    methods: {
        toMypage:function () {
            this.$router.push('UserShow');
        },
        login:function () {
            this.$router.push('UserRegister');
        },
        register:function () {
            this.$router.push('UserLogin');
        }
    }
}