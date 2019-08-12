const Axios = require('axios')
const Dev = require('../models/Dev')
module.exports.index = async (application, req, res ) => {
  const { user } = req.headers
  const loggedUser = await Dev.findById(user)

  const users = await Dev.find({
    $and: [
      {_id: { $ne: user } },
      {_id: { $nin: loggedUser.likes}},
      {_id: { $nin: loggedUser.dislikes}},
    ],
  })

  return res.json(users)
}

module.exports.create = async (application, req, res ) => {
  const { username } = req.body
  const userExists = await Dev.findOne({user: username})

  if (userExists) return res.json(userExists) 
  
  const response = await Axios.get(`https://api.github.com/users/${username}`)
  const { name, bio, avatar_url: avatar } = response.data
  const dev = await Dev.create({ 
    name: name || 'No Name',
    user: username,
    bio,
    avatar
   })
  return res.json(dev)
}