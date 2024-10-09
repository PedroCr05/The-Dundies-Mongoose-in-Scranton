const db = require(`../db`);
const { Company, Employee } = require(`../models`);

db.on(`error`, console.error.bind(console, `MongoDB connection error:`));

const main = async () => {
  const dunderMifflinPaper = await Employee.find({
    first_name: `Dwight`,
    last_name: `Shrute`,
    job_title: `salesman`,
  });
  const theMichaelScottPaper = await Employee.find({
    first_name: `Ryan`,
    last_name: `Howard`,
    job_title: `Accounting`,
  });
};

const companies = [
  {
    _id: ObjectId("70ed7af8f25e417175c82f04"),
    company_name: "Dunder Mifflin",
    location: "Scranton, PA",
    product: "paper",
    type: "private",
    established: 2003,
  },
  {},
];
