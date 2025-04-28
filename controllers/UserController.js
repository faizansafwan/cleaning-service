const bcrypt = require('bcrypt');
const User = require('../models/User.js');

// Create New User
async function createUser(req, res) {


  const { username, password } = req.body;

  // check if password or username empty
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }
  
  try {

    // Check if the username already exists
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already taken' });
    }

    // password hashing
    const hashedPassword = await bcrypt.hash(password, 10); 


    const user = await User.create({
      username,
      password_hash: hashedPassword
    });

    res.status(201).json({ message: 'User created successfully!', user });
  } 
  
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
}


module.exports = { createUser }; 