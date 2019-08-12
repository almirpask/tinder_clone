module.exports = (application) => {
  const DislikeController = application.app.controllers.DislikeController
  
  application.post('/devs/:devId/dislikes', (req, res) => {
    DislikeController.create(application, req, res)
  })
}