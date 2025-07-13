const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title :{
        type : String,
        require : true,
    }, 
    description : String,
    image : {
        // type : String,
        filename : String,
        url: String,
        // default: "https://unsplash.com/photos/a-lake-surrounded-by-mountains-under-a-blue-sky-Aln972onVgE",
        // set :(v) => v === "" ? "https://unsplash.com/photos/a-lake-surrounded-by-mountains-under-a-blue-sky-Aln972onVgE": v,
    },
    price : Number,
    location : String,
    country : String,
});

const Listing = mongoose.model("listing", listingSchema);
module.exports = Listing;