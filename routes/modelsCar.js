const { Router } = require('express');
const router = Router();
const {
  setExistModel,
  putAveragePrice,
  getRangeAverage
} = require('../controllers/modelsCar');
//GET
router.get('/', getRangeAverage);

//PUT
router.put('/:modelId', setExistModel, putAveragePrice);

module.exports = router;
