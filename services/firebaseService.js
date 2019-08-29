import {firebaseDatabase} from '../utils/firebase'


export default class FirebaseService {
    static getDataList = (nodePath, callback, size = 10) => {

        let query = firebaseDatabase.ref(nodePath).limitToLast(size);
        console.log('query: '+query);
        let items = [];
        query.once("value")
            .then(function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                
                var key = childSnapshot.key;
                console.log('key: '+key);
                
                var childData = childSnapshot.val();
                console.log(childData.entrada);

                items.push(childData);
            });
            callback(items);
        return query;
        });
    }
}
