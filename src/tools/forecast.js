const request = require('request')

const forecast = (letitude,longitude,callback)=>{
    const url = `http://api.weatherstack.com/current?access_key=0a59f19d658a9252fd4b0ec96270bddb&query=${letitude},${longitude}`

    request({url,json:true},(error,response)=>{
        if(error){
            callback('Error has Occurred',undefined)
        }else if(response.body.error){
            callback(response.body.error.message,undefined)
        }else{
            callback(undefined,response.body.current.weather_descriptions+ ' it is now '+ response.body.current.temperature)
        }
    })
}

module.exports = forecast