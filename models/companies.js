const { Schema } = require(`mongoose`);
const Employees = require(`./employees`);

const Company = new Schema(
  {
    _id: ObjectId(`70ed7af8f25e417175c82f04`),
    company_name: `Dunder Mifflin`,
    location: `Scranton, PA`,
    product: `paper`,
    type: `private`,
    established: 2003,
  },
  { timestamps: true }
);

module.exports = Company;
