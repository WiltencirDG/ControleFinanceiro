import {firebaseDatabase} from '../utils/firebase'



export default class FirebaseService {
    static getData = (nodePath, callback) => {

        let query = firebaseDatabase.ref(nodePath);
        console.log(query);
        let items = [];
        query.on("value", snapshot => {
            items = [];
            snapshot.forEach(function(childSnapshot) {
            
            var key = childSnapshot.key;                
            var childData = childSnapshot.val();
    
            items.push(childData);
        })
        callback(items);
        return query;
        });
    }

    static writeData(path,entrada,valor,tipo){
        firebaseDatabase.ref(path).push({
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
