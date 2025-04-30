const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

// fetch the jwt token
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

// Create New User
async function createUser(req, res) {


  const { username, password } = req.body;

  // check if password or username empty
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  // password the password length
  if (password.length < 8) {
    return res.status(400).json({ message: 'Password must be at least 8 characters long' });
  }
  
  try {

    // Check if the username already exists
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already taken' });
    }

    // password hashing
    const hashedPassword = await bcrypt.hash(password, 10); 


    // save new user
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



// Login User
async function loginUser(req, res) {

  // 
  const { username, password } = req.body;

  // check if username or password empty
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: '6d' }
    );


    // You can generate a token here if needed (e.g., JWT)
    res.status(200).json({ 
      message: 'Login successful!', 
      user: { id: user.id, username: user.username }, 
      token: token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
}

module.exports = { createUser, loginUser }; 