const mongoose = require('mongoose');
const dbConnection = async () => {
  try {
    mongoose.connect(process.env.MONGODE_CONN, {
      useNewUrlParser: true
    });

    console.log('base de datos online');
  } catch (error) {
    throw new Error('error en la base de datos');
  }
};

module.exports = {
  dbConnection
};
