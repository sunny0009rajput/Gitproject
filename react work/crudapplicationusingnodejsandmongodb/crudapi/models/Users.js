const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
    customer_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    
    customer_phone: { type: String, required: true },
    address:[
        {
            street : String,
            city : String,
            state: String,
            postalCode : String,
            country : String,
        },
    ],
    createdAt : {type :Date, default : Date.now},
    
     

});
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
