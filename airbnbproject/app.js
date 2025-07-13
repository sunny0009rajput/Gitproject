const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(()=>{
        console.log("connected to db");
    })
    .catch((err)=>{
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}    

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.send("hi i am root");
});


// index route 
app.get("/listing", async (req,res)=>{
   const allListing = await Listing.find({});
    res.render("listings/index.ejs", {allListing});
});

// show route
app.get("/listing/:id", async(req,res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});

});
// new route 
app.get("/listing/new", async(req,res)=>{
    
})

// app.get("/testlisting", async (req, res)=> {
//     let sampleListing = new Listing({
//         title : "my new villa",
//         description : "near the beach",
//         price : 1200,
//         location : "calngute , goa",
//         country : "India",
//     });
//     await sampleListing.save();
//     console.log("sample was saved successfully");
//     res.send("successful testing ");
// });

app.listen(8080, () =>{
    console.log("server is listening to port 8080");
});