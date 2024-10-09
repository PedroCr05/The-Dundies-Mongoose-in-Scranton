const { Schema } = require(`mongoose`);
const Employee = require(`./employees`);

const Company = new Schema(
  {
    _id: { type: Schema.Types.ObjectId, ref: `_id` },
    company_name: { type: String, require: true },
    location: { type: String, require: true },
    product: { type: String, require: true },
    type: { type: String, require: true },
    established: { type: Number, require: true },
  },
  { timestamps: true }
);

module.exports = Company;
