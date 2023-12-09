const mongoose = require('mongoose');

const connection = async()=>{
  const URL = process.env.MONGO_URI;
  try{
      await mongoose.connect(URL);
      console.log('database connected');
  }catch(error){
      console.log('database not connected', error)
  }
}
module.exports = connection;