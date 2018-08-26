const UserRegister = {
    name: 'UserRegister',
    template: '<div>\
            <el-container class="is-vertical">\
                <el-header style = "height: 36px;">\
                    <el-button type="text" class = "button" @click="toMypage" >黄孟军</el-button>\
                    <el-button type="text" class = "button" @click="login" >登录</el-button>\
                    <el-button type="text" class = "button" @click="register" >注册</el-button>\
                </el-header>\
                <el-main>\
                <div><h2>博客园</h2></div>\
                <div class = "context">\
                    <el-form label-position="top" :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">\
                        <el-form-item label="用户名">\
                            <el-input v-model="ruleForm2.username"></el-input>\
                        </el-form-item>\
                        <el-form-item label="密码" prop="password">\
                            <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>\
                        </el-form-item>\
                        <el-form-item label="确认密码" prop="checkPass">\
                            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>\
                        </el-form-item>\
                        <el-form-item>\
                            <el-button type="primary" @click="registerSubmit(\'ruleForm2\')">注册</el-button>\
                            <el-button type="primary" @click="cancel(\'ruleForm2\')">取消</el-button>\
                        </el-form-item>\
                    </el-form>\
                </div>\
                </el-main>\
                <el-footer style="height: 30px;"></el-footer>\
            </el-container>\
    </div>',
    data: function () {
        var vm = this;
        var validatePass = function(rule, value, callback){
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (vm.ruleForm2.checkPass !== '') {
                    vm.$refs.ruleForm2.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass2 = function(rule, value, callback){
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== vm.ruleForm2.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            ruleForm2: {
                username: '',
                password: '',
                checkPass: ''
            },
            rules2: {
                password: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        toMypage: function () {
            this.$router.push('UserShow');
        },
        login: function () {
            this.$router.push('UserRegister');
        },
        register: function () {
            this.$router.push('UserLogin');
        },
        registerSubmit:function(formName) {
            var vm = this;
            this.$refs[formName].validate(function(valid){
                if (valid) {
                    var todo = new Todo();
                    todo.registerNewUser(
                        function (response) {
                            if (response!=null) {
                                console.log('返回数据成功!')
                            }
                        },
                        function (error) {
                            
                        },
                        vm.ruleForm2.username,
                        vm.ruleForm2.password
                    )
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
}