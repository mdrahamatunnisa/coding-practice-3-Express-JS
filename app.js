const express = require('express')

const addDays = require('date-fns/addDays')
const app = express()

app.get('/', (req, res) => {
  let dateAfterHundredDays = addDays(new Date(), 100)
  let formattedDate = `${dateAfterHundredDays.getDate()}-${
    dateAfterHundredDays.getMonth() + 1
  }-${dateAfterHundredDays.getFullYear()}`
  res.send(formattedDate)
})

app.listen(3000)

module.exports = app
