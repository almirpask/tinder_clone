const app = require('./config/application')

const port = process.env.PORT || 3333

app.listen(port, () => {
  console.log(`app is running on http://localhost:${port}`)
})