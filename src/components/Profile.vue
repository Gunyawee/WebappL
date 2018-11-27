<template>
  <div id="view-employee">
    <div>
      <p><h4>{{name}}</h4></p>
      <p>Student ID: {{id}}</p>
      
    </div>
    <router-link :to="{ name: 'Hello'}" class="btn grey">Back</router-link>
  </div>
</template>

<script>
import { db } from '../main'
export default {
  name: 'user-profile',
  data() {
    return {
      id: null,
      name: null,
      sid: null,
      faculty: null
    };
  },
  beforeRouteEnter(to, from, next) {
    db
      .collection('users')
      .where('id', '==', to.params.studentid)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.name = doc.data().name;
            vm.id = doc.data().id;
            
          });
        });
      });
  },
  watch: {
    $route: 'fetchData'
  },
  methods: {
    fetchData() {
      db
        .collection('users')
        .where('sid', '==', this.$route.params.user_sid)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.name = doc.data().name;
            this.id = doc.data().id;
            
          });
        });
    },
  }
};
</script>