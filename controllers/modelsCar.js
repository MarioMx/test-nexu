const { response } = require('express');
const postModelsCar = async (req, res = response) => {
  const body = req.body;

  res.status(200).json({ msg: 'se creo satisfactoriamente el modelo', body });
};

const setExistModel = async (req, res = response, next) => {
  req.modelId = req.params.modelId;

  next();
};

const putAveragePrice = async (req, res = response) => {
  const body = req.body;

  res.status(200).json({ msg: 'post', body });
};

//req.query.page
///models?greater=380000&lower=400000

const getRangeAverage = async (req, res = response) => {
  const greater = req.query.greater;
  const lower = req.query.lower;

  res.status(200).json({ msg: 'Success', greater });
};

module.exports = {
  postModelsCar,
  setExistModel,
  putAveragePrice,
  setExistModel,
  getRangeAverage
};
