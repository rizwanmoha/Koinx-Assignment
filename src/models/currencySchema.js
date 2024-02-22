import mongoose from 'mongoose';


// const CryptocurrencySchema = new mongoose.Schema({
//   id: {
//       type: String,
//       // required: true,
//       // unique: true
//   },
//   name: {
//       type: String,
//       // required: true,
//       // unique: true
//   },
//   symbol: {
//       type: String,
//       // required: true,
//       // unique: true
//   }
// });

const CryptocurrencySchema = new mongoose.Schema({
  id: String,
  name: String,
  symbol: String,
});

  const Cryptocurrency = mongoose.model('Cryptocurrency', CryptocurrencySchema);

  export default Cryptocurrency;

  