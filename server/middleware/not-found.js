// This callback function will be triggered when the path is wrong! (check app.js line 25)

const notFound = (req, res) => res.status(404).send('Route does not exist')

module.exports = notFound
