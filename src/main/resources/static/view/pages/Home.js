const Home = {
    name: 'Home',
    template: '<div>\
                    <el-container>\
                        <el-header style = "height: 30px;">\
                            <el-button type="text" class = "button" @click="toMypage" >黄孟军</el-button>\
                            <el-button type="text" class = "button" @click="login" >登录</el-button>\
                            <el-button type="text" class = "button" @click="register" >注册</el-button>\
                        </el-header>\
                        <el-main>\
                            <div v-for = "bolgobj in bolgarr">\
                                <div><h2>{{bolgobj.title}}</h2></div>\
                                <div>{{bolgobj.content}}</div>\
                                <div>{{bolgobj.userName}}创建于{{bolgobj.time}}</div>\
                            </div>\
                        </el-main>\
                        <el-footer style="height: 30px;"></el-footer>\
                    </el-container>\
            </div>',
    data: function () {
        return {
            bolgarr: []
        };
    },
    created: function () {
        this.bolgarr = data;
    },
    methods:{
        toMypage:function () {
            this.$router.push('UserShow');
        },
        login:function () {
            this.$router.push('UserLogin');
        },
        register:function () {
            this.$router.push('UserRegister');
        }
    }
}