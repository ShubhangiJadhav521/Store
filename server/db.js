const mongoose = require('mongoose');

const connection = async()=>{
  const URL = `mongodb://0.0.0.0:27017/Stores`;
  try{
      await mongoose.connect(URL);
      console.log('database connected');
  }catch(error){
      console.log('database not connected', error)
  }
}
module.exports = connection;