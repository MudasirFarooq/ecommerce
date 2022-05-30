<template>
  <div>
    <div class="container-fluied cont">
      <div class="row">
        <div class="col-12 col-md-5"></div>
        <div class="col-12 col-md-6 px-5">
          <div class="contain  mx-5">
            <div class="mx-5 mt-5 p-2">
              <h1 class="mt-5">SignIn</h1>
            </div>
            <form action="" @submit.prevent="signin">
            <div class="form-floating mt-3 mb-1 mx-5 ">
              <input
                type="text"
                class="form-control cal"
                id="floatingInput"
                placeholder="name@example.com"
                v-model="Username" 
              />
              <label for="floatingInput">Enter Your Name</label>
              <p>{{usererror}}</p>
            </div>
            <div class="form-floating mt-3 mb-1 mx-5 ">
              <input
                type="text"
                class="form-control cal"
                id="floatingInput"
                placeholder="name@example.com"
                v-model="email" 
              />
              <label for="floatingInput">Enter Your E-mail</label>
              <p>{{emailerror}}</p>
            </div>
            <div class="form-floating mt-3 mb-1 mx-5">
              <input
                type="psssword"
                class="form-control cal"
                id="floatingInput"
                placeholder="name@example.com"
                v-model="password"   
              />
              <label for="floatingInput">Enter Your Password</label>
              <p >{{passerror}}</p>
            </div>
            <div class="form-floating mt-3 mb-1 mx-5">
              <input
                type="psssword"
                class="form-control cal"
                id="floatingInputC"
                placeholder="name@example.com"
                v-model="confirmP"   
              />
              <label for="floatingInputC">Confirm Your Password</label>
              <p >{{confirmPE}}</p>
            </div>
            <div class="mx-5 mt-5">
                <button type="submit" class="btn">Signin</button>
            </div>
            </form> 

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      Username:'',  
      email:'',
      password:'',
      emailerror:'',
      passerror:'',
      usererror:'',
      confirmP:'',
      confirmPE:''
    }
  },
  computed: {
  },
  methods:{
    
    signin(){
        if(this.confirmP === ''){
            this.confirmPE = "passwoed not match"
        }
        else if(this.confirmP !== this.password) {
            this.confirmPE = "password not match"
        }else{
            this.confirmPE = ""
        }

      if(this.Username === ''){
          this.usererror = "user name is requaird"
      }else if (this.Username.length < 3) {
          this.usererror = "user name lenght must b greater then 3"
      } else {
          this.usererror = ''
      }
      
      if(this.email == '' ){
          this.emailerror = "required email"
      }else if(this.email.indexOf('@') < 1){
        this.emailerror = "@ symbol not be on bigning"
      }else if (this.email.lastIndexOf('.')  < this.email.indexOf('@') + 3){
          this.emailerror  = "enter valid email"
      }else if (this.email.lastIndexOf('.') === this.email.length - 1){
          this.emailerror  = "enter valid email"
      }else(
          this.emailerror = ''
      )
    
    if(this.password == ''){
        this.passerror = "password is requaired"
    }else if(this.password.length <= 7 ){
        this.passerror= 'password lenght must be greater then 7'
    }else{
        this.passerror = ''
    }

    
      
    }
  },
  mounted(){
  },
  
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
.cont {
  background: url("https://static.vecteezy.com/system/resources/previews/002/446/592/large_2x/luxury-mandala-background-with-golden-arabesque-free-vector.jpg");
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
}
.contain {
  /* background: rgba(13, 56, 53, 0.4); */
  background: rgb(211, 209, 209);
  height: 88vh;
}
h1 {
  padding: 0px 0px;
  color: rgb(11, 49, 34) !important;
  width: 200px;
  margin-top: 30px;
  font-weight: bold;
}
.cal {
  background: transparent !important;
  border-bottom: 3px solid rgb(11, 49, 34) !important;
  border: none;
  border-radius: none !important;
}
.cal:focus {
  box-shadow: none;
  outline: 0 none;
  border-bottom: 4px solid rgb(11, 49, 34) !important;
  background: rgba(11, 49, 34, 0.4) !important;
}
button {
  width: 100%;
  padding: 15px 0;
  color: white;
  font-size: 25px;
}
button:hover {
  color: white;
  background: rgba(11, 49, 34, 0.99) !important;
}
p{
  color: red;
  font-size: 14px;
}
</style>