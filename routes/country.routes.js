const { Router } = require('express');
const { getCountryInfo } = require('../controllers/countries');

const router = Router();

router.get('/:country', getCountryInfo);

module.exports = router;