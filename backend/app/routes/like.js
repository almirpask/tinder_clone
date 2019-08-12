module.exports = (application) => {
  const LikeController = application.app.controllers.LikeController
  
  application.post('/devs/:devId/likes', (req, res) => {
    LikeController.create(application, req, res)
  })
}