import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'
const firebaseApp = firebase.initializeApp(firebaseConfig, {
  timestampsInSnapshots: true
})

export default firebaseApp.firestore({ timestampsInSnapshots: true })
