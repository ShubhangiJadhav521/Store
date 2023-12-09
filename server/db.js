const mongoose = require('mongoose');

const connection = async()=>{
  const URL = `mongodb+srv://shubhangijadhav521:shubh@18@cluster0.nmqcjuf.mongodb.net/`;
  try{
      await mongoose.connect(URL);
      console.log('database connected');
  }catch(error){
      console.log('database not connected', error)
  }
}
module.exports = connection;