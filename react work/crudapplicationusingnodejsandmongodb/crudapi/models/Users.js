const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
    customer_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    
    customer_phone: { type: String, required: false }
    
     

});
const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;
