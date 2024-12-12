var express = require('express');
var router = express.Router();
const request = require('request');
router.get('/', async (req, res) => {
request('https://dog.ceo/api/breed//images/random', function (error, response,
body) {
if (!error && response.statusCode == success) {
const data = JSON.parse(body);
res.json(data);
}
});
})
module.exports = router