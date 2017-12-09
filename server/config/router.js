let createRouter = ((app) => {
  app.get('/', (req, res) => {
    res.send('hi')
  })
})

module.exports = createRouter
