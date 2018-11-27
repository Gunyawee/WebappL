// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

/* eslint-disable no-new */
let app;
 // Initialize Firebase
  var config = {
     apiKey: "AIzaSyC--8gSjpZYxV77-5BKKPMeavjVxDDIjjY",
    authDomain: "hwwebapp-32ded.firebaseapp.com",
    databaseURL: "https://hwwebapp-32ded.firebaseio.com",
    projectId: "hwwebapp-32ded",
    storageBucket: "hwwebapp-32ded.appspot.com",
    messagingSenderId: "636393121565"
 
  };
  firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
});

const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true};
firestore.settings(settings);
 
export const db = firestore;
