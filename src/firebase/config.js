import firebase from 'firebase/app'
import 'firebase/auth'

if(!firebase.apps.length){
    firebase.initializeApp({
        apiKey: 'AIzaSyDwMN3r_BdhE5sKBA5NGRuvta1KzpYpQ9A',
        authDomain: 'admin-template-coder-97754.firebaseapp.com',
        projectId: 'admin-template-coder-97754',
    })
}

export default firebase