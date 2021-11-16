const express = require('express')
const {spawn} = require('child_process')
const app = express()
const path = require('path')
const { time } = require('console')

// const indexJs = require('./public/index')
const port = process.env.PORT || 5000


console.log(path.join(__dirname, 'public'))

app.get('/arming', (req,res) =>{
    console.log("in /arming")
    var dataToSend;
    // spawn new child process to call python Script
    const python = spawn('python', ['simpleGoTo.py','arm']);
    // collect data from python script
    python.stdout.on('data', function(data){
        console.log("Pipe data from python script...")
        dataToSend = data.toString();
    });
    //in close event we are sure that stream from child process is closed
    // python.on('close', (code)=>{
    //     console.log(`child process close all stdio with code ${code}`);
    //     //send data to Browser
    //     res.send(dataToSend)
    // });
})
app.get('/takeoff', (req,res) =>{
    console.log("in /takeoff")
    var dataToSend;
    // spawn new child process to call python Script
    const python = spawn('python', ['simpleGoTo.py','takeoff']);
    // collect data from python script
    python.stdout.on('data', function(data){
        console.log("Pipe data from python script...")
        dataToSend = data.toString();
    });
    
    // in close event we are sure that stream from child process is closed
    // python.on('close', (code)=>{
    //     console.log(`child process close all stdio with code ${code}`);
    //     //send data to Browser
    //     res.send(dataToSend)
    // });
})
app.get('/goto', (req,res) =>{
    console.log("in /goto")
    var dataToSend;
    // spawn new child process to call python Script
    const python = spawn('python', ['simpleGoTo.py','goto']);
    // collect data from python script
    python.stdout.on('data', function(data){
        console.log("Pipe data from python script...")
        dataToSend = data.toString();
    });
    // in close event we are sure that stream from child process is closed
    // python.on('close', (code)=>{
    //     console.log(`child process close all stdio with code ${code}`);
    //     //send data to Browser
    //     res.send(dataToSend)
    // });
})
app.get('/rtl', (req,res) =>{
    console.log("in /rtl")
    var dataToSend;
    // spawn new child process to call python Script
    const python = spawn('python', ['simpleGoTo.py','rtl']);
    // collect data from python script
    python.stdout.on('data', function(data){
        console.log("Pipe data from python script...")
        dataToSend = data.toString();
    });
    // in close event we are sure that stream from child process is closed
    // python.on('close', (code)=>{
    //     console.log(`child process close all stdio with code ${code}`);
    //     //send data to Browser
    //     res.send(dataToSend)
    // });
})

app.use(express.static(path.join(__dirname, 'public')))
app.listen(port, ()=>{console.log(`Listening on port ${port}`)})