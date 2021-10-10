const request = require('request')

const geocode = (addr,callback)=>{
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${addr}.json?access_token=pk.eyJ1IjoiaG9zYW1zYWxlaCIsImEiOiJja3VmOTkwMTQxcnR1MndsbWl4dHpyODkwIn0.ML0A3M7Xzjl-8Vg32_WUIw`

    request({url,json:true},(error,response)=>{
        if(error){
            callback('Error has Occurred', undefined)
        }else if(response.body.message){
            callback(response.body.message,undefined)
        }else if(response.body.features.length === 0){
            callback('Wrong Search',undefined)
        }else{
            callback(undefined,{
                letitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1]
            })
        }
    })
}

module.exports = geocode