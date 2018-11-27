<template>

<div>
	
	<h5>Register</h5>
	<input type="text" v-model="email" placeholder="Email"><br>
	<input type="password" v-model="password" placeholder="Password"><br>
	<button v-on:click="signUp" >Submit</button>
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
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('hello')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
      }
    }
  }
 


</script>

<style scoped>
input {
	margin: 10px 0;
	padding: 5px;
}
</style>