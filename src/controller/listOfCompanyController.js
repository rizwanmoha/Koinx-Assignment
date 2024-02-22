import { companyValidationSchema } from "../validations/companyValidations.js";
import { getCompaniesByCurrency } from "../services/companyService.js";

export const getListOfCompany = async (req, res) => {
  try {
    const { error, value } = companyValidationSchema.validate(req.body);
    if (error) {
      
      return res.status(400).send({
        success: false,
        message: "Validation Failed",
        error: error.details[0].message,
      });
    }
    const { currency } = value;

    const result = await getCompaniesByCurrency(currency);
    if (result.success) {
      return res
        .status(200)
        .send({
          success: true,
          message: "List of companies hold the currency",
          companies: result.companies,
        });
    } else {
      return res.status(500).send({ success: false, message: result.message });
    }
  } catch (error) {
   
    return res
      .status(500)
      .send({ success: false, message: "Internal server error" });
  }
};
