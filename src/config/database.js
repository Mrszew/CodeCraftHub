const mongoose = require('mongoose');
const User = require('../models/userModel');

const connectDB = async () => {
  try {
    // Wprowadź swoją nazwę bazy danych, hasło oraz tajny klucz poniżej
    const dbName = 'marcelraszew';
    const password = 'MjUyMDQtbWFyY2Vs';
    const secretKey = '679736e59794e072b37961e86d334a6f579b91b6d66d60e4876f695bd42c87d5';

    // Użyj tych zmiennych w URI połączenia
    const uri = `mongodb://${secretKey}:${password}@localhost:27017/${dbName}`;

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
