const User = require("../models/userModel");

// GET /users
const getAllUsers = (req, res) => {
  const users = User.getAll();
  res.json(users)
};

// POST /users
const createUser = (req, res) => {
  const user = ({...req.body})
  if (user){
    User.addOne(user)
  res.json(user)
  } else {
    res.status(500).json("Failed to create user")
  }
  
};

// GET /users/:userId
const getUserById = (req, res) => {
  const user = User.findById(req.params.userId)
  if (user){
    res.json(user)
  } else {
    res.status(404).json("Failed to find user")
  }
};

// PUT /users/:userId
const updateUser = (req, res) => {
  const userId = req.params.userId
  const updatedUser = User.updateOneById(userId, {...req.body})
  if (updatedUser){
    res.json(updatedUser)
  } else {
    res.status(404).json("Failed to update user")
  }
};

// DELETE /users/:userId
const deleteUser = (req, res) => {
  const userId = req.params.userId
  const deletion = User.deleteOneById(userId)
  if (deletion){
    res.json("Deletion successful")
  } else {
    res.status(404).json("Failed to delete user")
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
