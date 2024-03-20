const mongodb = require ('mongodb')
const MongoClient = mongodb.MongoClient
const connectionUrl = 'mongodb://127.0.0.1:27017' 
const dbName='proj-2'

MongoClient.connect(connectionUrl, (error, res1) =>{
    if(error){
        return console.log('error')
    }
    console.log ("Connected successfully to server")
    const db =  res1.db(dbName)
    /////////////////////////////
    //to add data
    db.collection('users').insertOne({name:'jon', age: 20} ,(error, data) => {
        if(error){
            console.log('unable to  insert data')
        }
        console.log(data)
    })

    db.collection('users').insertOne({name:'nora', age: 23} ,(error, data1) => {
        if(error){
            console.log('unable to  insert data1')
        }
        console.log(data1)
    })
//    ////////////////////////////////////////////

    db.collection('users').insertMany(
        [
            {
                name:'sherif',
                age:19
            },
            {
                name: 'mohammed',
                age:19
            },
            {
                name: 'shereen',
                age:19
            },
            {
                name: 'ahmed',
                age:19
            },
            {
                name: 'ali',
                age:27
            },
            {
                name: 'sara',
                age:27
            },
            {
                name: 'emad',
                age:27
            },
            {
                name: 'wael',
                age:27
            },
            {
                name: 'shahed',
                age:27
            },
            {
                name: 'eman',
                age:40
            }
        ], (erorr, data) =>{
            if(erorr){
            console.log('unable to insert data')
            }
            console.log(data.insertCount) 

        }
    )
    //////////////////////////////////////////////////////////////////////////////////////////


    db.collection('users').findOne({age:27},(error,user)=>{
        if(error){
            console.log('unable to  insert data')
        }
        console.log(user)
    })
    /////////////////////////////////////////////////////////
     
   db.collection('users').find({age:27}).limit(3).toArray((error,users) =>{
    if(error){
      return console.log('error')
    }
    console.log(users)
    })

    ////////////////////////////////////////////////////////////////////////


    db.collection( 'users' ).updateOne({_id:mongodb.ObjectId("65fb64adbc994c534cb3cd44")}, {
        $inc:{age: +5} 
    })
    .then((data) => {console.log(data.modifiedCount)}) 
    .catch((err) => { console.log(err)})

    //////////////////////////////////////////////////////////////////////////

    db.collection( 'users' ).updateMany({age: 19},{
            
        $set: {"name": "ava" },
        $inc:{age: +5}
    })
    .then((data1) => {console.log(data1.modifiedCount)})
    .catch((err) => { console.log(err)})






    //////////////////////////////////////////////////////
    /*************   remove from database *****************/

    db.collection( 'users' ).deleteMany({age : 27})
    .then((data1) => {console.log(data1.deletedCount)})
    .catch((err) => { console.log(err)})



   
})
