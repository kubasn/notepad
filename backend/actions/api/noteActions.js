//akcje zwiazane z notatkami
const Note = require("../../database/models/note");
class NoteActions {
  async saveNote(req, res) {
    //newNote.save().then(() => {
    // console.log("Notatka zapisana");
    //});
    const title = req.body.title;
    const descripion = req.body.body;
    const newNote = new Note({
      title,
      body: descripion,
    });
    try {
      await newNote.save();
    } catch (err) {
      return res.status(422).json({ message: err.message });
    }
    res.status(201).json(newNote);
  }

  async getAllNotes(req, res) {
    //możemy poddać tu obiekt a w nim wymagania np.title:'..'
    //tutaj jako drugi argument funkcja asynchroniczna, która posługuje się callbackiem
    //jeśli coś pójdzie nie tak zwróci błąd, jeśli wszystko ok pobierze document-nasze rekordy,
    //nasze notatki
    let doc;
    try {
      doc = await Note.find({}, (err, doc) => {});
      // throw new Error("jakiś błąd");
    } catch (err) {
      //dodaje return by to co jest później się nie wykonało,nie moge dwa raazy wysłać nagłówka
      return res.status(500).json({ message: err.message });
    }
    res.status(200).json(doc);
  }
  async getNote(req, res) {
    let doc;
    let note;
    const id = req.params.id;
    try {
      note = await Note.findOne({ _id: id });
    } catch (err) {
      return res.status(500).json(err.message);
    }
    res.status(200).json(note);
  }

  async editNote(req, res) {
    //edycja notatek
    const id = req.params.id;
    const title = req.body.title;
    const body = req.body.body;
    let note = await Note.findOne({ _id: id });
    //  const updateNote = {
    //  title,
    // body,
    //};
    note.title = title;
    note.body = body;
    await note.save();
    res.status(201).json(note);
  }

  async deleteNote(req, res) {
    const id = req.params.id;
    await Note.deleteOne({ _id: id });
    //status który mówi że wszystko zostało wykonane,ale żadna treść nie jest zwracana
    //skoro usunęłem notatke to żaden tekst nie powinniem być przyjmowany
    //co więcej jakbym soć wysyłał np json() to nic nie zostanie przejęte
    res.status(204).send();
  }
}
module.exports = new NoteActions();
