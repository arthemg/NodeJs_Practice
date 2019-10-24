const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')



const location = process.argv[2]
if(location === undefined){
    console.log('Please enter the location for wether forecast')
}else {
    geocode.geocode(location, (error, {latitude,longitude,location}) => {
        if (error){
            return console.log(error)
        }
        forecast.forecast(latitude, longitude, (error, forcastData) => {
            if (error){
                return console.log(error)
            }

            console.log(location)
            console.log(forcastData)
            // console.log('Data', data)
        })
        console.log(process.argv)
    })
}
