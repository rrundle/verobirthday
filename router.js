
const { Router } = require('express')
const notes = require('./notes')

const router = new Router()

router.get('/', (req, res) => {
  console.log('hi');
})

module.exports = router
