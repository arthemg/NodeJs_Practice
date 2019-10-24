const mongodb = require('task-manager/src/db/mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID
const databaseName = 'task-manager'
const userCollection = 'users'
const tasksCollection = 'tasks'


MongoClient.connect(process.env.CONNECTION_URL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({_id: new ObjectID('5da0d678df2b5e5a70255b61')}, (error, user) => {
    //     if (error){
    //         console.log('Unable to fetch user')
    //     }
    //     console.log(user)
    // })

    // db.collection(tasksCollection).findOne({_id: new ObjectID('5da0d3556c9fd25a2cfb461a')}, (error, task) => {
    //     if (error){
    //         console.log('Unable to fetch user')
    //     }
    //     console.log(task)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID('5da0ca41965f53599f9140fb')
    // }, {
    //     // $set: {
    //     //     age: 32
    //     // }
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error)
    // })


    // db.collection(tasksCollection).updateMany({
    //     completed:false
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection(userCollection).deleteMany({
    //     age:'32'
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    // })

    db.collection(tasksCollection).deleteOne({
        description: 'Get groceries'
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })


})

