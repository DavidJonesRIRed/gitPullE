const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const personSchema = new Schema({
  firstName: String
});

module.exports = Person = mongoose.model("persons", personSchema);
