<template>
  <div>
    <div class="container-fluied cont">
      <div class="row">
        <div class="col-12 col-md-5"></div>
        <div class="col-12 col-md-6 p-5">
          <div class="contain mt-5 mx-5">
            <div class="mx-5 mt-5 p-2">
              <h1 class="mt-5">Login</h1>
            </div>
            <form action="" @submit.prevent="login">
              <div class="form-floating mt-5 mb-3 mx-5">
                <input
                  type="email"
                  class="form-control cal"
                  id="floatingInput"
                  placeholder="name@example.com"
                  v-model="email"
                />
                <label for="floatingInput">Enter Your E-mail</label>
                <p>{{ emailerror }}</p>
              </div>
              <div class="form-floating mt-5 mb-3 mx-5">
                <input
                  type="psssword"
                  class="form-control cal"
                  id="floatingInput"
                  placeholder="name@example.com"
                  v-model="password"
                  autocomplete="off"
                />
                <label for="floatingInput">Enter Your Password</label>
                <p>{{ passerror }}</p>
              </div>

              <div class="mb-3 form-check mx-5 mt-4">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1"
                  >Check me out</label
                >
              </div>
              <div class="mx-5 mt-4">
                <button type="submit" class="btn">Login</button>
              </div>
            </form>
            <p class="text-center mt-5" style="color: rgb(11, 49, 34)">
              Can't have an account..?
              <router-link to="/signin">SignIn</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      alldata: [],
      emailerror: "",
      error: "",
      passerror: "",
    };
  },
  computed: {},
  methods: {
    showdata() {
      axios.get("https://fakestoreapi.com/users").then((response) => {
        this.alldata = response.data;
      });
    },
    login() {
      if (this.email == "") {
        this.emailerror = "required email";
      } else if (this.password == "") {
        this.passerror = "required password";
      } else {
        console.log(this.email + this.password);
        let a = this.alldata.find((item) => {
          return item.email === this.email && item.password === this.password;
        });
        if (a) {
          localStorage.setItem("user-info", JSON.stringify(a));
          this.$router.push({ name: "home" });
          alert("success");
        } else {
          this.passerror = "password or email incorect";
          this.emailerror = "";
        }
      }
    },
  },
  mounted() {
    this.showdata();
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
  height: 80vh;
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
p {
  color: red;
  font-size: 14px;
}
</style>