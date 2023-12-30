<template>
  <div id="login">
    <div class="me-login-box me-login-box-radius">
      <h1>Login Form</h1>

      <el-form ref="userForm" :model="userForm" :rules="rules">
        <el-form-item prop="user">
          <div class="my-form1">
            <img src="@/assets/用户.png" id="user-img" />
            <input
              class="my-input"
              placeholder="用户名"
              type="text"
              v-model="userForm.user"
              ref="user"
            />
          </div>
        </el-form-item>

        <el-form-item prop="pwd">
          <div class="my-form1">
            <img src="@/assets/密码.png" id="pwd-img" />
            <input
              class="my-input"
              placeholder="密码"
              type="password"
              v-model="userForm.pwd"
              ref="pwd"
            />
            <img
              src="@/assets/close.png"
              id="eyes-img"
              ref="eyes"
              @click="show()"
            />
          </div>
        </el-form-item>

        <el-form-item size="small" class="me-login-button">
          <el-button type="primary" @click.native.prevent="login('userForm')"
            >登录</el-button
          >
          <el-button type="primary" @click="register">注册</el-button>
        </el-form-item>
      
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    
    name: "Login",

    data() {
      return {
        userForm: {
          user: "",
          pwd: "",
        },
        rules: {
          user: [
            { required: true, message: "用户名不能为空" }, //trigger: 'blur'
          ],
          pwd: [
            { required: true, message: "密码不能为空" },
            { min: 6, message: "pwd must be at least 6 characters" },
          ],
        },
        flag:false,
        flag2:true,
      };
    },

    methods: {
      login(formName) {
        let that = this;

        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (
              this.userForm.user.trim() != "" &&
              this.userForm.pwd.trim() != ""
            ) {
              let params = new URLSearchParams();
              params.append("user", this.userForm.user);
              params.append("pwd", this.userForm.pwd);

              this.axios
                .post("http://10.23.91.201:5000/check_login", params)
                .then(function (response) {
                  // console.log(response);
                  if (response.data.success === true) {
                    that.$router.push("/homeView").catch(() =>{});
                    window.sessionStorage.setItem("true",response.true)
                    console.log(response.true);
                  } else if (response.data.success=== false) {
                    alert("登录失败，用户名不存在或者密码错误");
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            }
          } else {
            if (this.userForm.user.trim() === "") {
              this.$refs.user.style.borderColor = "red";
            } else {
              this.$refs.user.style.borderColor = "#797979";
            }

            if (this.userForm.pwd.trim() === "") {
              this.$refs.pwd.style.borderColor = "red";
            } else {
              this.$refs.pwd.style.borderColor = "#797979";
            }
            return false;
          }
        });
      },
      show() {
        if (this.flag) {
          this.$refs.eyes.src =require("@/assets/close.png") ;
          this.$refs.pwd.setAttribute("type", "password");
        } else {
          this.$refs.eyes.src = require("@/assets/eye.png");
          this.$refs.pwd.setAttribute("type", "text");
        }
        this.flag = !this.flag;
      },  
      register(){
        this.$bus.$emit('SendRes',this.flag2)
      }

    },
  };
</script>

<style  lang="less" scoped>
  #my-form1 {
    position: relative;
  }

  .me-login-box-radius {
    border-radius: 10px;
    vertical-align: top;
    width: 410px;
    margin: 0 auto;
    // background: pink;
  }
  .me-login-box h1 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
    vertical-align: middle;
    color: white;
    font-weight: bolder;
    text-shadow: 2px 2px 4px #000000;
  }
  .me-login-design {
    text-align: center;
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
  }

  .me-login-button {
    text-align: center;
  }
  .me-login-button button {
    width: 160px;
  }
  #pwd-img {
    width: 20px;
    height: 20px;
    position: absolute;
    margin-top: -10px;
    top: 50%;
    left: 32px;
  }
  #user-img {
    width: 20px;
    height: 20px;
    position: absolute;
    margin-top: -10px;
    top: 50%;
    left: 32px;
  }
  #eyes-img {
    width: 20px;
    height: 20px;
    position: absolute;
    margin-top: -10px;
    top: 50%;
    right: 32px;
  }

  .my-input {
    width: 313px;
    height: 35px;
    line-height: 35px;

    background: #f3f2f2 !important;
    color: #121111;
    border: 0.1px solid #797979;
    padding-left: 35px;

    border-radius: 3%;
    display: block;
    margin: 0 auto;
  }
</style>

