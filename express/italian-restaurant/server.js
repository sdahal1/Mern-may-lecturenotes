const express = require("express");
const cors = require("cors"); ////if our server doesn't have the correct headers set and isn't configured to accept the correct sorts of requests, then when go to visit this server using javascript and ajax with it, then we're going to get cors exceptions, meaning we can't make requests to this server from the brower, we'd have to make it from somewhere else
const port = 8000;


const app = new express();

app.use(cors());
app.use(express.json()); //allows us to use json
app.use( express.urlencoded({ extended: true }));


const menu = [
    {name: "Calamari", price: 12.00, calories: 400},
    {name: "Shrimp Linguine", price: 15.00, calories: 1400},
    {name: "Baked Ziti", price: 50.00, calories: 500},
    {name: "Pizza", price: 18.00, calories: 1000},
    {name: "Angel Hair Pasta with Shrimp", price: 13.00, calories: 700},
]

// let x = [3,4,5,7]
// x[1] = 2





//creating our api endpoints now
app.get("/api/hello", (req, res)=>{
    res.json({message: "wazzzzzaaaaaaaaaaaapp"});
})

//get all menu items
app.get("/api/menu", (req,res)=>{
    res.json({menu: menu})
})

//GET one item
app.get("/api/menu/:id", (req,res)=>{
    if(req.params.id > menu.length-1){
        res.json({result: "Wazzuuu talkin bout linguine"})
    }
    else{
        res.json({result: menu[req.params.id]})
    }

})

//POST one item
app.post("/api/menu", (req,res)=>{
    console.log("*********")
    console.log(req.body)
    console.log("********")
    menu.push(req.body)
    res.json({msg: "posted"})
})

//update one item
app.put("/api/menu/:id", (req,res)=>{
    console.log(req.params.id)
    console.log(req.body)
    menu[req.params.id] = req.body
    res.json({msg: menu})
})

//delete one item
app.delete("/api/menu/:id", (req, res)=>{
    menu.splice(req.params.id, 1)
    res.json({msg: menu})
})









//make it so that our server can listen for requests on port 8000
app.listen(port, ()=>console.log(`Listening on port number ${port} `) );




