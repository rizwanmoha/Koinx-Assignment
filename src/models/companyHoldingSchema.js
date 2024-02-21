import mongoose from 'mongoose';

const CompanyHoldingsSchema = new mongoose.Schema({
    currency: String,
    companies: [{
      name: String,
      holdingAmount: Number,
      holdingValue: Number,
    }],
  });

const CompanyHoldings = mongoose.model('CompanyHoldings', CompanyHoldingsSchema);

export default CompanyHoldings;