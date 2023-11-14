const router = require('express').Router();
const {getAllData, getByRegion, getByInput} = require("../controllers/data.cont")

router
    .get('/get-all-data', getAllData)
    .post('/get-by-region', getByRegion)
    .post('/get-by-input', getByInput)

module.exports = router;