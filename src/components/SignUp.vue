<template>
  <div class="sign-up">
    <!-- <img src=".././assets/logoFood.png" style="width:260px;height:260px;"> -->
    <p class="title">Let's create a new account !</p>
    <input style="	
    color: rgb(55, 123, 52);
    font-size: 18px;
    width: 250px !important;
    height: 40px;
    border-radius: 20px !important;
    border: 0.5px solid rgb(82, 212, 74);
    padding: 4px 0px 4px 19px;
    box-shadow: rgb(75, 197, 96) 3px 3px 10px -3px;
    outline-width: 0px;" type="text" v-model="email" placeholder="Email"><br>
    <input style="	
    color: rgb(55, 123, 52);
    font-size: 18px;
    width: 250px !important;
    height: 40px;
    border-radius: 20px !important;
    border: 0.5px solid rgb(82, 212, 74);
    padding: 4px 0px 4px 19px;
    box-shadow: rgb(75, 197, 96) 3px 3px 10px -3px;
    outline-width: 0px;" type="password" v-model="password" placeholder="Password"><br>
    <button style="	font-size: 18px;
	width: 270px !important;
	height: 49px;
	border-radius: 20px !important;
	border: 0.5px solid rgb(76, 171, 71);
	padding: 4px 0px 4px 0px;
	box-shadow: 3px 3px 10px -3px #cacaca;
  outline-width: 0px;
  background-color: rgb(76, 171, 71);
  color: #fff;
  " v-on:click="signUp">Sign Up</button>
    <div class="title2">or go back to
      <router-link to="/login">login</router-link>.</div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
	name: 'signUp',
	data: function() {
		return {
			email: '',
			password: ''
		}
	},
	methods: {
		signUp: function() {
			firebase
				.auth()
				.createUserWithEmailAndPassword(this.email, this.password)
				.then(
					user => {
						this.$router.replace('hello')
					},
					err => {
						alert('Oops. ' + err.message)
					}
				)
		}
	}
}
</script>

<style scoped>
.signUp {
	margin-top: px;
}
.sign-up {
	text-align: center;
	margin-top: 100px;
}

input {
	margin: 10px 0;
	width: 20%;
	padding: 15px;
}
button {
	margin-top: 10px;
	width: 10%;
	cursor: pointer;
}
span {
	display: block;
	margin-top: 20px;
	font-size: 11px;
}

.title {
	font-size: 30px;
}

.title2 {
	margin-top: 20px;
	font-size: 20px;
}
</style>
