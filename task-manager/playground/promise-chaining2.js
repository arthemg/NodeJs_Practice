require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5da102d5a715ab08bd6b9117').then((task) => {
//     console.log(task);
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })


const deleteTaskAndCount = async (id) =>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('5da10eb8af66d90adfff63d1').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})