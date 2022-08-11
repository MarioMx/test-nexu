const { Schema, model } = require('mongoose');

const BrandSchema = Schema({
  id: {
    type: Number,
    require: [true, 'El id es obligatorio']
  },
  name: {
    type: String,
    require: [true, 'El name es obligatorio'],
    unique: true
  }
});

module.exports = model('Brand', BrandSchema);
