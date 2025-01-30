const { Router } = require('express');
const { getCountryInfo } = require('../controllers/countries');

const router = Router();

router.get('/country/:country', getCountryInfo);

router.get('/continent/:continent', getCountryInfo);

module.exports = router;