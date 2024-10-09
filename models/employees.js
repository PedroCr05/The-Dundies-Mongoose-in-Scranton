const { Schema } = require(`mongoose`);

const Employee = new Schema(
  {
    _id: { type: Schema.Types.ObjectId, ref: `_id` },
    company_id: { type: Schema.Types.ObjectId, ref: `company_id` },
    first_name: { type: String, require: true },
    last_name: { type: String, require: true },
    email: { type: String, require: true },
    job_title: { type: String, require: true },
    salary_in_usd: { type: Number, require: true },
    address: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = Employee;
