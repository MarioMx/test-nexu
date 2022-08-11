const { response } = require('express');
const ModelCar = require('../models/modelCar');
const Brand = require('../models/brands');

const getBrands = async (req, res = response) => {
  const Brads = await Brand.find();
  res.status(200).json({ msg: 'success', Brads });
};

const getBrandsModels = async (req, res = response) => {
  const id = req.params.brandId;
  const existBrand = await Brand.findOne({ id: id });
  if (!existBrand) {
    res.status(404).json({ msg: 'No existe una marca con el id: ' + id });
  }

  const modelCars = await ModelCar.find({ brandName: existBrand.name });

  res.status(200).json({ msg: 'success', modelCars });
};

const postBrands = async (req, res = response) => {
  const body = req.body;
  const lastBrand = await Brand.findOne({}, {}, { sort: { id: -1 } });
  if (lastBrand) body.id = lastBrand.id + 1;
  const brand = new Brand(body);
  const existBrand = await Brand.findOne({ name: body.name });

  if (!existBrand) {
    await brand.save();
    res.status(201).json({ msg: 'Marca creada satisfactoriamente', brand });
  } else {
    res.status(404).json({ msg: 'Ya existe una Marca con El Mismo nombre' });
  }
};

const setExistBrand = async (req, res = response, next) => {
  const id = req.params.brandId;
  req.brandId = req.params.brandId;
  const existBrand = await Brand.findOne({ id: id });
  req.existBrand = existBrand;
  next();
};

module.exports = {
  getBrands,
  postBrands,
  setExistBrand,
  getBrandsModels
};
