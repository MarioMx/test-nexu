const { Router } = require('express');

const {
  getBrands,
  postBrands,
  setExistBrand,
  getBrandsModels
} = require('../controllers/brands');

const { postModelsCar } = require('../controllers/modelsCar');
const router = Router();

//Listar todas las marcas
router.get('/', getBrands);

//Listar todas las marcas
router.post('/', postBrands);

router.post('/:brandId/models', setExistBrand, postModelsCar);

router.get('/:brandId/models', getBrandsModels);

module.exports = router;
