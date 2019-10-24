const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYXJ0aGVtZyIsImEiOiJjazFpNGpyYTMwOGtkM2hqejg0ZjFwanF2In0.F4J81MxiJr_hs6xDXIlCJw&limit=1'
    request({url, json: true}, (error, {body}) => {
        if (error) {
            // console.log('Unable to connect to weather service!')
            callback('Unable to connect to location service', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find the location!', undefined)
            // console.log('Unable to find the location!')
        } else {
            const longitude = body.features[0].center[0]
            const latitude = body.features[0].center[1]
            const location = body.features[0].place_name
            callback(undefined, {
                longitude: longitude,
                latitude: latitude,
                location: location
            })
        }
    })
}

module.exports = {
    geocode: geocode
}