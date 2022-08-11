const { Schema, model } = require('mongoose');

const ModelCarSchema = Schema({
  id: {
    type: Number,
    require: [true, 'El id es obligatorio']
  },
  name: {
    type: String,
    require: [true, 'El name es obligatorio']
  },
  averagePrice: {
    type: Number,
    require: [true, 'El average_price es obligatorio']
  },
  brandName: {
    type: String,
    require: [true, 'El brand_name es obligatorio']
  }
});

module.exports = model('Model', ModelCarSchema);
