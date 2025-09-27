const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const AdminSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true, trim: true },
  email : {type: String, unique: true, required:true, trim: true},
  passwordHash: { type: String, required: true },
  role: { type: String, default: 'admin' },
  resetPasswordToken: String, // <-- add this
  resetPasswordExpires: Date, 
}, { timestamps: true });

// helper to set password
AdminSchema.methods.setPassword = async function (password) {
  this.passwordHash = await bcrypt.hash(password, 12);
};

// helper to verify password
AdminSchema.methods.validatePassword = async function (password) {
  return bcrypt.compare(password, this.passwordHash);
};

// genereate reset token 
AdminSchema.methods.generateResetToken = function () {
  const token = crypto.randomBytes(32).toString("hex");
  this.resetPasswordToken = crypto.createHash("sha256").update(token).digest("hex");
  this.resetPasswordExpires = Date.now() + 30 * 60 * 1000; // 1 hour
  return token;
};

module.exports = mongoose.model('Admin', AdminSchema);
