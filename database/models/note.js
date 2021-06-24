const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

//bo zwykły obiekt nie pozwala na takie rzeczy jak walidacja
const Note = mongoose.model("Note", NoteSchema);
module.exports = Note;
