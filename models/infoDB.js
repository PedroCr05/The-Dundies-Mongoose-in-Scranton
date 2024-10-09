const mongoose = require(`mongoose`);
const CompanySchema = require(`./companies`);
const EmployeeSchema = require(`./employees`);

const Company = mongoose.model(`Company`, CompanySchema);
const Employee = mongoose.model(`Employee`, EmployeeSchema);

module.exports = {
  Company,
  Employee,
};
