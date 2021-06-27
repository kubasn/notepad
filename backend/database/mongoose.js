const mongoose = require("mongoose");
const { Note } = require("./models/note");
const { database } = require("../config");
//adres oraz nazwa bazy
mongoose.connect(database, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

//const newNote = new Note({ title: "Nowa notatka", body: "tekst tekst tekst" });

//save zwraca promisa,mogę zrobić wtedy then -> który wykona się wtedy kiedy notatka się zapisze
//newNote.save().then(() => {
//  console.log("notatka została zapisana");
//});
