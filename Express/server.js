// npm init -y is the first thing
// npm install express is the second thing
// make a new file server.js
// 

const express = require("express");
const app = express(); // initializes express and stores it in the variable app for further use
const port = 8000; //8000 is what express runs on. React runs on 3000 and you don't want to use that for the backend

// all other requests and statements are put in here
// below is a get route

app.use(express.json()); // allow people to send over json
app.use(express.urlencoded({extended:true}));

app.get("/api", (req,res) => {
    res.json({message: "api is made"});
});

app.get("/api/params/:word", (req,res) => {
    res.json({})
})

app.post("/api/repeat", (req,res) => {
    res.json(req.body);
})

app.listen(port, () => console.log(`running on port ${port}`));