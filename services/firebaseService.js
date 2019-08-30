import {firebaseDatabase} from '../utils/firebase'



export default class FirebaseService {
    static getData = (nodePath, callback, size = 10) => {

        let query = firebaseDatabase.ref(nodePath).limitToLast(size);
        console.log(query);
        let items = [];
        query.once("value")
            .then(function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                
                var key = childSnapshot.key;                
                var childData = childSnapshot.val();

                items.push(childData);
            });
            callback(items);
        return query;
        });
    }

    static writeData(path,entrada,valor,tipo){
        firebase.database().ref(path).set({
            entrada,
            valor,
            tipo
        }).then((data)=>{
            //success callback
            console.log('data ' , data)
        }).catch((error)=>{
            //error callback
            console.log('error ' , error)
        })
    }
}
