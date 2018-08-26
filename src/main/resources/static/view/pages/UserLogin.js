const UserLogin = {
    name: 'UserLogin',
    template: '<div>\
            <el-container class="is-vertical">\
                <el-header style = "height: 36px;">\
                    <el-button type="text" class = "button" @click="toMypage" >黄孟军</el-button>\
                    <el-button type="text" class = "button" @click="login" >登录</el-button>\
                    <el-button type="text" class = "button" @click="register" >注册</el-button>\
                </el-header>\
                <el-main>\
                <div><h2>博客园</h2></div>\
                <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">\
                    <el-form-item label="密码" prop="pass">\
                        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>\
                    </el-form-item>\
                    <el-form-item>\
                        <el-button type="primary" @click="submitForm(\'ruleForm2\')">登录</el-button>\
                    </el-form-item>\
                </el-form>\
                </el-main>\
                <el-footer style="height: 30px;"></el-footer>\
            </el-container>\
    </div>',
    methods:{
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