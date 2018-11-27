<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   

  <img src="https://suratv2.files.wordpress.com/2015/08/doraemon-e1440947824794.jpg">

    <button v-on:click="hello" class="btnK">สมาชิก</button>

    <button v-on:click="logout" class="btnK">Logout</button>
  </div>
</template>
















<script>
import firebase from 'firebase';

import { db } from '../main'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'WELCOME',
      users: []
    }
  },
  created() {
    db
      .collection('users')
      .get()
      .then(querySnapshot => {
        this.loading = false;
        console.log('fuck')
        querySnapshot.forEach(doc => {
          const data = {
          
            name: doc.data().name,
            id: doc.data().id,
          
          };
          this.users.push(data);
          console.log('data : ',data)
         
        });
      });
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('hello')
      })
    },
     hello: function() {
     
        this.$router.replace('hello')
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.td{
  width:10px;
}
.tr{
  width:10px;
}

.w10{
  width:700px;
  text-align:center;
}

.btnK{
  border-radius:20px;
  width:100px;
  background-color: #000;
  color:#fff;

}

.btnK:hover{
  background-color: gray;
  cursor:pointer;
}
</style>