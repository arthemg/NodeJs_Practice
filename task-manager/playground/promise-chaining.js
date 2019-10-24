require('../src/db/mongoose')
const User = require('../src/models/user')

//5da10d013272f90ac018adf8

// User.findByIdAndUpdate('5da10123233b6508225aed7d', {age: 55}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 55})
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e)
// })


const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id,{age: age})
    const count = await User.countDocuments({age})
    return count
}


updateAgeAndCount('5da10123233b6508225aed7d', 45).then((count)=>{
    console.log(count)

}).catch((e)=>{
    console.log(e)
})