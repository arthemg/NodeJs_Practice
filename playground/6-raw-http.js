const https = require('https')
const url = 'https://api.darksky.net/forecast/e4197c212c92eb55bba40a125fb5297f/40,-75'

const request = https.request(url, (res) => {
    let data = ''
    res.on('data', (chunk) => {
        // console.log(chunk.toString())
        data = data + chunk.toString()
        console.log(data)

    })

    res.on('end', () => {
        const responseBody = JSON.parse(data)
        console.log(responseBody)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()