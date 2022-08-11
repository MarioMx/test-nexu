const { response } = require('express');

const getBrands = async (req, res = response) => {
  res.status(200).json({ msg: 'get Api getBrands' });
};

const getBrandsModels = async (req, res = response) => {
  const id = req.params.brandId;

  res.status(200).json({ msg: 'get Api getBrands/models ', id });
};

const postBrands = async (req, res = response) => {
  const body = req.body;

  res.status(201).json({ msg: 'Marca creada satisfactoriamente', body });
};

const setExistBrand = async (req, res = response, next) => {
  const id = req.params.brandId;
  req.brandId = req.params.brandId;
  next();
};

module.exports = {
  getBrands,
  postBrands,
  setExistBrand,
  getBrandsModels
};
