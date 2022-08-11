const { response } = require('express');
const ModelCar = require('../models/modelCar');
const Brand = require('../models/brands');

const postModelsCar = async (req, res = response) => {
  const body = req.body;
  if (!req.existBrand)
    res
      .status(404)
      .json({ msg: 'No existe una marca con el id: ' + req.brandId });

  const existModelCar = await ModelCar.findOne({
    name: body.name,
    brandName: req.existBrand.name
  });

  if (existModelCar)
    res.status(404).json({
      msg:
        'Ya existe un modelo con el mismo nombre para la marca: ' +
        req.existBrand.name
    });

  if (body.averagePrice < 100000)
    res.status(404).json({
      msg: 'La oferta debe ser superior a 100,000'
    });
  const lastModelCar = await ModelCar.findOne({}, {}, { sort: { id: -1 } });
  if (lastModelCar) body.id = lastModelCar.id + 1;
  const modelCar = new ModelCar({
    id: body.id,
    name: body.name,
    averagePrice: body.averagePrice,
    brandName: req.existBrand.name
  });

  await modelCar.save();
  res
    .status(200)
    .json({ msg: 'Se creo el modelo satisfactoriamente', modelCar });
};

const setExistModel = async (req, res = response, next) => {
  req.modelId = req.params.modelId;
  const id = req.params.modelId;
  const existModelCar = await ModelCar.findOne({ id: id });
  req.existModelCar = existModelCar;
  next();
};

const putAveragePrice = async (req, res = response) => {
  const body = req.body;
  modelCar = req.existModelCar;
  if (!modelCar)
    res
      .status(404)
      .json({ msg: 'No existe un modelo de marca con el id: ' + req.modelId });

  if (body.averagePrice < 100000)
    res.status(404).json({
      msg: 'La oferta debe ser superior a 100,000'
    });

  modelCar.averagePrice = body.averagePrice;

  await modelCar.save();
  res.status(200).json({ msg: 'post', modelCar });
};

//req.query.page
///models?greater=380000&lower=400000

const getRangeAverage = async (req, res = response) => {
  const greater = req.query.greater;
  const lower = req.query.lower;
  const modelCars = await ModelCar.find()
    .where('averagePrice')
    .gt(Number(greater))
    .lt(Number(lower));

  res.status(200).json({ msg: 'success', modelCars });
};

module.exports = {
  postModelsCar,
  setExistModel,
  putAveragePrice,
  setExistModel,
  getRangeAverage
};
