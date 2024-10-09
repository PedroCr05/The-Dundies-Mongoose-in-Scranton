const { ObjectId } = require("bson");
const { Schema, model } = require(`mongoose`);

const Employee = new Schema(
  {
    _id: ObjectId(`5e417175c82e0bd7af0f2f04`),
    company_id: dunderMifflin[0]._id,
    first_name: `Dwight`,
    last_name: `Shrute`,
    email: `DShrute@dm.com`,
    job_title: `salesman`,
    salary_in_usd: 65000,
    address: `4 Beet Rd., Scranton PA 13425`,
  },
  { timestamps: true }
);

module.exports = Employee;
