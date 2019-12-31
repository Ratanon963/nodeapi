//console.log("PROCESS", process);

// const {sum,add} = require("./helps");

// const http = require('http')
// const server = http.createServer((req,res) => {
//     res.end("hello word from node js real update");

// });

// server.listen(3000);


// // Var let const
// const total = sum(10,200);
// console.log("TOTAL: ",total);



// const express = require('express');
// const app = express();

// app.get('/', (req,res) => {
//     res.send("hey what up from express")
// });

// app.listen(3000);



// const data = fs.readFileSync(fileName); // certain method
// console.log(data.toString());




// Asynchronous 
const fs = require("fs");
const fileName = "target.txt";

const errHanler = err => console.log(err);
const dataHandler = data => console.log(data.toString());


fs.readFile(fileName,(err,data) => {
    if(err) errHanler(err);     
    dataHandler(data);
});

console.log("Node js async programming.....\n");
