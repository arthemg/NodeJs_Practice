const request = require('request')
const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/e4197c212c92eb55bba40a125fb5297f/' + longitude + ',' + latitude
    // console.log('URL ', url)
    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find the location!', undefined)
        } else {
            // callback(undefined, {
            //     summary: response.body.daily.data[0].summary,
            //     temperature: response.body.currently.temperature,
            //     precipitation: response.body.currently.precipProbability
            // })
            // console.log(response.body.daily.data[0].temperatureHigh)
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. The high today is ' + response.body.daily.data[0].temperatureHigh + ' with a low of ' + response.body.daily.data[0].temperatureLow + '. There is a ' + response.body.currently.precipProbability + '% chace of rain.')
            // const body = response.body.currently
            // // console.log(response.body.currently)
            // console.log(response.body.daily.data[0].summary + ' It is currently ' + body.temperature + ' degrees out. There is a ' + body.precipProbability + '% chace of rain.')
        }
    })
}

module.exports = {
    forecast: forecast
}