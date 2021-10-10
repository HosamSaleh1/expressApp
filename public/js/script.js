const myForm = document.getElementById('myForm')
// const myForm = document.querySelector('myForm')
const location = document.getElementById('location')
const forcast = document.getElementById('forecast')
const error = document.getElementById('error')

myForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    console.log(document.getElementById('address').value)
  //  weather()
    myForm.reset()
})

const weather = async()=>{
    try{
        const address = document.getElementById('address').value
        console.log(address)
        const res = await fetch('http://localhost:8000/weather?address='+ address)
        const data = await res.json()
        if(data.error){
            error.innerText = data.error
        }else{
            location.innerText = data.location
            forcast.innerText = data.forcast
        }
    }catch(e){
        error.innerText = e
    }
}