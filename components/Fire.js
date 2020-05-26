import firebase from 'firebase'

class Fire{

    constructor(){
        this.init();
        this.checkAuth();
    }

    init = () =>{
        if(!firebase.apps.length){
            firebase.initializeApp({
               
                    apiKey: "AIzaSyB6ptdN50RtFFp5mWZoBjh69Ek9ezhklWE",
                    authDomain: "myapp-c929f.firebaseapp.com",
                    databaseURL: "https://myapp-c929f.firebaseio.com",
                    projectId: "myapp-c929f",
                    storageBucket: "myapp-c929f.appspot.com",
                    messagingSenderId: "303985695609",
                    appId: "1:303985695609:web:5954192a6e14dff5f2ada8",
                    measurementId: "G-07V861KHC0"
               
            })
        }
    };

    checkAuth = () =>{
        firebase.auth().onAuthStateChanged(user => {
            if(!user){
                firebase.auth().signInAnonymously();
            }
        });
    };

    send = messages => {
        messages.forEach(item => {
           const message = {
               text:item.text,
               timestamp: firebase.database.ServerValue.TIMESTAMP,
               user: item.user
           };

           this.db.push(message)

        });
    };

    parse = message => {

        const {user, text, timestamp } = message.val();
        const {key: _id } = message;
        const createdAt = new Date(timestamp);

        return{
            _id,
            createdAt,
            text,
            user
        };
    };

    get = callback => {
        this.db.on("child_added", snapshot => callback(this.parse(snapshot)));
    }
    

    off(){
        this.db.off();
    }


    get db(){
        return firebase.database().ref('messages');
    }

    get uid(){
        return (firebase.auth().currentUser || {}).uid;
    }
}

export default new Fire();