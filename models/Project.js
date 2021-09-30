const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const projectSchema = new Schema({
  title: {
    type: String,
    // unique: true -> Ideally, should be unique, but its up to you
  },
  description: String,
});

const Project = model("Project", projectSchema);

module.exports = Project;
