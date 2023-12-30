<template>
  <div id="register">
    <div class="me-register-box me-register-box-radius">
      <h1>Register Form</h1>

      <el-form
        @submit.prevent="submit"
        ref="formRef"
        :model="form"
        :rules="rules"
      >
        <el-form-item prop="user"
          ><div class="my-form1">
            <img src="@/assets/用户.png" id="user-img" />

            <input
              class="my-input"
              placeholder="用户名"
              v-model="form.user"
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
              type="pwd"
              v-model="form.pwd"
              ref="pwd"
            /></div
        ></el-form-item>
        <el-form-item prop="email">
          <div class="my-form1">
            <img src="@/assets/邮箱.png" id="email-img" />
            <input
              class="my-input"
              placeholder="邮箱"
              v-model="form.email"
              ref="email"
              type="email"
            />
          </div>
        </el-form-item>

        <el-form-item size="small" class="me-login-button">
          <el-button type="primary" @click="onSubmit()">注册</el-button>
          <el-button style="margin-left: 0px;margin-top: 15px; " type="primary" @click="close">已有账号</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Register",
    data() {
      //邮箱验证,使用正则表达式进行匹配
      var validateEmail = (rule, value, callback) => {
        let reg = /^([a-zA-Z\d])(\w|\-)+@[a-zA-Z\d]+\.[a-zA-Z]{2,4}$/;
        if (!reg.test(this.form.email)) {
          callback(new Error("请输入正确的邮箱地址"));
        } else {
          callback();
        }
      }; //密码验证
      var validatePass = (rule, value, callback) => {
        // 正则表达式：包含数字、大写字母和小写字母
        let reg = /^.*(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/;
        if ((this.form.pwd.length < 6) | (this.form.pwd.length > 16)) {
          //密码长度不在指定范围
          callback(new Error("请输入6-16位密码"));
        } else {
          callback();
        }
      };
      return {
        form: {
          user: "",
          pwd: "",
          email: "",
        },
        rules: {
          user: [{ message: "请输入账号", trigger: "blur" }],
          pwd: [{ validator: validatePass, trigger: "blur" }],
          email: [{ validator: validateEmail, trigger: "blur" }],
        },
        // flag: "false",
      };
    },
    methods: {
      onSubmit() {
        console.log(111);
        const data = {
          user: this.form.user,

          pwd: this.form.pwd,
          email: this.form.email,
        };
        this.$refs.formRef.validate((valid) => {
          // console.log(222);
          if (valid) {
            this.axios
              .post(
                "http://10.23.91.201:5000/register?user&pwd&email",
                JSON.stringify(data)
              )
              .then((response) => {
                console.log(response);
                console.log(response.data.result);
                if (response.data.result) {
                  alert("注册成功");
                  window.sessionStorage.setItem("result", response.data.result);
                  // console.log(333);
                  // reload();
                  location.reload()
                } else {
                  alert("注册失败，此邮箱已注册！");
                }
              })
              .catch(function (error) {
                console.log(error);
              });
          } else {
            return false;
          }
        });
      },
      close() {
        location.reload();
      }
    },
  };
</script>

<style lang="scss" scoped>
  .my-form1 {
    position: relative;
  }
  #email-img {
    margin-left:0.5px;
    width: 25px;
    position: absolute;
    margin-top: -12.5px;
    top: 50%;
    left: 30px;
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
    right: 30px;
  }

  .me-register-box-radius {
    border-radius: 10px;
    vertical-align: top;
    width: 410px;
    margin: 0 auto;
  }
  .me-register-box h1 {
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
    width: 350px;
  }

  .my-input {
    width: 313px;
    height: 35px;
    margin-left: 25px;
    background: #f3f2f2 !important;
    color: #121111;
    border: 0.1px solid #797979;
    padding-left: 35px;
    border-radius: 3%;
    display: block;
    margin: 0 auto;
  }
</style>

        

