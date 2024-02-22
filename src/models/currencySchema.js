import mongoose from "mongoose";

const CryptocurrencySchema = new mongoose.Schema({
  id: String,
  name: String,
  symbol: String,
},
{ timestamps: true }
);

const Cryptocurrency = mongoose.model("Cryptocurrency", CryptocurrencySchema);

export default Cryptocurrency;
