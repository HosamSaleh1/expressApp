const express = require('express')
const path = require('path')
const hbs = require('hbs')
const forecast = require('./tools/forecast')
const geocode = require('./tools/geocode')

const app = express()
const port = 8000

const publicPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

app.use(express.static(publicPath))
app.set('view engine','hbs')
app.set('views',viewPath)
hbs.registerPartials(partialsPath)

// app.get('/',(req,res)=>{
//     res.send('<h1>Hello Wooooooooooorld</h1>')
// })


// app.get('/weather',(req,res)=>{
//     res.send('Hello Weather')
// })

// app.get('/help',(req,res)=>{
//     res.send('Heeeeeelp')
// })

app.get('/about',(req,res)=>{
    res.send({
        name:'Hosam',
        age:34,
        job:'Programmer'
    })
})

app.get('/', (req,res)=>{
    res.render('index',{
        firstName: 'Hosam',
        words: 'there is an error and we trying to fix it',
        lastName:'Saleh'
    })
})

app.get('/help1', (req,res)=>{
    res.render('help',{
        title: 'hosam',
        words: 'there is an error and we trying to fix it',
    })
})

app.get('/about1', (req,res)=>{
    res.render('aboutus',{
        title: 'hosam',
        words: 'there is an error and we trying to fix it',
    })
})


app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'Please Enter Your Address'
        })    
    }
    geocode(req.query.address,(error,data)=>{
        if(error){
            return res.send({error})
        }
        forecast(data.letitude,data.longitude,(error,data)=>{
            if(error){
                return res.send({error})
            }
            res.send({
                location:req.query.address,
                forecast:data
            })
        })
    })
})

app.get('*', (req,res)=>{
    res.render('404page',{
        title: '404 Page Not Found',
        words: 'the page that you are looking for is not existing',
    })
})

app.listen(port,()=>{
    console.log("Server is running ...")
})