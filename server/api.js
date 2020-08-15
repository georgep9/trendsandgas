const router = require('express').Router()
const axios = require('axios')
const { getBlockInterval } = require('./services')

router.get('/', (req, res) => {
  res.send('Gas trends api')
})

router.get('/gas/:address', async (req, res) => {
  try {
    const address = req.params.address
    const [from, to] = await getBlockInterval(req.query.filter)
    const data = await axios.get(`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=${from}&endblock=${to}&sort=asc&apikey=${process.env.ETHERSCAN_KEY}`)
    res.send(data.data.result)
  } catch (e) {
    res.send({ error: true, message: e.message ? e.message : e })
  }
})

module.exports = router