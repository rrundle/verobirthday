
const { Router } = require('express')

const router = new Router()

router.get('/', (req, res) => {
  console.log('hi');
})

module.exports = router
