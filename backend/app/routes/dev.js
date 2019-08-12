module.exports = (application) => {
  const DevController = application.app.controllers.DevController
  application.get('/devs', (req, res) => {
    DevController.index(application, req, res)
  })
  application.post('/devs', (req, res) => {
    DevController.create(application, req, res)
  })
}