const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('./models/Admin');  // adjust path if needed
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  const hashedPassword = await bcrypt.hash('admin123', 10);

  const admin = new Admin({
    username: 'supersunny',
    email: 'rajputsunny0009@gmail.com',
    passwordHash: hashedPassword,   // 👈 FIXED
    role: 'admin'
  });

  await admin.save();
  console.log('✅ Admin created');
  process.exit();
});

