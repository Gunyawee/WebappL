<template>

	<div class="hello">

		<h1>{{ msg }}</h1>

		<div id="new-employee">

			<div class="row">
				<form @submit.prevent="saveEmployee" class="col s12">

					<div class="Fi2">
						<div class="input-field col s12">
							<label>ชื่ออาหาร</label>
							<input type="text" v-model="name" class="input" placeholder="เช่น ข้าวมันไก่" required>
						</div>
					</div>

					<div class="Fi">
						<div class="input-field col s12">
							<label>จำนวน</label>
							<input type="number" v-model="ea" class="input" placeholder="1" required>
						</div>
					</div>

					<button type="submit" class="btnLogout">ยืนยันการสั่ง</button>

				</form>
			</div>
		</div>

		<h2>
			<a href="/#/hello" target="" style="margin-right:20px">
				<i class="fas fa-home"></i>ไปหน้าแรก</a>
			<a href="/#/profile" target="">ไปหน้าผู้จัดทำ
				<i class="fas fa-users"></i>
			</a>
		</h2>

		<!-- <button v-on:click="logout">Logout</button> -->
	</div>
</template>

<script>
import db from './firebaseInit'
import firebase from 'firebase'
export default {
	name: 'order',

	// name: 'hello',
	data() {
		return {
			msg: 'หน้าสั่งอาหาร',
			name: null,
			ea: null
		}
	},
	created() {
		if (firebase.auth().currentUser) {
			this.isLoggedIn = true
			this.currentUser = firebase.auth().currentUser.email
		}
	},
	methods: {
		saveEmployee() {
			db
				.collection('order')
				.add({
					name: this.name,
					ea: this.ea,
					customer: this.currentUser
				})
				.then(docRef => {
					console.log('Client added: ', docRef.id)
					this.$router.push('/hello')
				})
				.catch(error => {
					console.error('Error adding employee: ', error)
				})
		},
		logout: function() {
			firebase
				.auth()
				.signOut()
				.then(() => {
					this.$router.replace('login')
				})
		}
	}
}
</script>


<style scoped>
h1,
h2 {
	font-weight: normal;
}

ul {
	list-style-type: none;
	padding: 0;
}
.Fi {
	margin-top: 20px;
	margin-bottom: 20px;
}
.Fi2 {
	margin-top: 20px;
	margin-bottom: 20px;
	padding-right: 20px;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
	color: #42b983;
}
ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
	overflow: hidden;
	background-color: #333;
}

li {
	float: left;
}

li a {
	display: block;
	color: white;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
}

li a:hover:not(.active) {
	background-color: #111;
}

.active {
	background-color: #4caf50;
}

.hello {
	text-align: center;
}
.btnLogout {
	color: rgb(55, 123, 52);
	font-size: 18px;
	width: 277px !important;
	height: 40px;
	border-radius: 20px !important;
	border: 0.5px solid rgb(82, 212, 74);
	padding: 4px 0px 4px 0px;
	box-shadow: rgb(75, 197, 96) 3px 3px 10px -3px;
	outline-width: 0px;
	cursor: pointer;
}
label {
	font-size: 20px;
}

.btnLogout:hover {
	color: #fff;
	background-color: #4caf50;
}

.input {
	color: rgb(55, 123, 52);
	font-size: 18px;
	width: 200px !important;
	height: 40px;
	border-radius: 20px !important;
	border: 0.5px solid rgb(82, 212, 74);
	padding: 4px 0px 4px 19px;
	box-shadow: rgb(75, 197, 96) 3px 3px 10px -3px;
	outline-width: 0px;
}
</style>
