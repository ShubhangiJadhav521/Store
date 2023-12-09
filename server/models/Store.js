// Store schema 
const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  storeName: String,
  logo: String,
  offers: [
    {
      offerTitle: String,
      description: String,
      couponCode: String
    }
  ]
});

module.exports = mongoose.model('story_datas', storeSchema);
