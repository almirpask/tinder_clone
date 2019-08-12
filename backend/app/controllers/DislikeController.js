const Dev = require('../models/Dev')

module.exports.create = async (application, req, res ) => {
  const { devId } = req.params
  const { user } = req.headers

  const targetDev = await Dev.findById(devId)
  console.log('nana')
  console.log(targetDev)
  if(!targetDev) {
    return res.status(400).json({error: 'Dev not exist'})
  }
  const loggedUser = await Dev.findById(user)

  loggedUser.dislikes.push(targetDev._id)

  await loggedUser.save()
  return res.json(loggedUser)
}