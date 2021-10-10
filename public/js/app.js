// Declaration
const myForm = document.getElementById("myForm")

const locationn = document.getElementById('location')
const forcast = document.getElementById('forecast')
const error = document.getElementById('error')

const weather = async()=>{
    try{
        const address = document.getElementById('address').value
        const res = await fetch('http://localhost:8000/weather?address='+ address)
        const data = await res.json()
        if(data.error){
            error.innerText = data.error
        }else{
            locationn.innerText = data.location
            forcast.innerText = data.forecast
        }
    }catch(e){
        error.innerText = e
    }
}

myForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    weather()
    myForm.reset()
})
