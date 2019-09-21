<template>
  <div class="hello">
    <h2 id="title">Welcome Back!</h2>
    <div class="form1">
      <b-form v-on:submit="onSubmit">
        <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
          <b-form-input
            id="input-1"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password" label-for="input-2">
          <b-form-input
            id="input-2"
            type="password"
            required
            placeholder="Enter Password"
          ></b-form-input>
        </b-form-group>

        <div id="submit-button">
          <p><a href="">Forgot Password?</a></p>
           <b-button type="signin" variant="danger">Sign In</b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      let userData = JSON.stringify(this.form);
      console.log(userData);
      fetch("http://localhost:8080", {
        body: userData,
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (!res.ok) {
          console.log("Could not process post request. Body sent: ", res.bodyUsed, res.status);
          this.$router.push('/dashboard');
        }
      })
    },
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-danger  {
  background-color:  #3a3986 !important;
  color: white !important;
  border-color: #3a3986 !important;
}

.btn-danger:hover {
  border-color: #3a3986 !important;
}
.hello {
  background-color: white;
  border-radius: 5%;
  left: 35%;
  top: 25%;
  position: absolute;
  bottom: 50%;
  margin: 0 auto;
  width: 30%;
  height: 60%;
}

a {
  color: black;
}

.form1 {
  padding: 25px;
  margin-top: 20px;
}



#title {
  padding: 15px;
  text-align: center;
  margin-top: 15px;
  font-size: 35px;
  font-weight: 500;
}

</style>
