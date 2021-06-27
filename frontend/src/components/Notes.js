import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./Notes.css";
import Note from "./Note/Note";
import NewNote from "./NewNote/NewNote";
import EditNote from "./EditNote/EditNote";
import axios from "axios";
export default function Notes() {
  const [notes, setNotes] = useState([]);

  const [editNote, setEditNote] = useState({
    title: null,
    body: null,
    _id: null,
  });

  const [modalOpen, setModalOpen] = useState(false);
  const deleteNote = async id => {
    await axios.delete("http://localhost:3001/api/notes/" + id);
    let newNotes = [...notes];
    newNotes = newNotes.filter(x => x._id !== id);
    setNotes(newNotes);
  };

  const addNote = async note => {
    const newNotes = [...notes];
    //backend
    const res = await axios.post("http://localhost:3001/api/notes", note);
    //frontend
    newNotes.push(res.data);
    setNotes(newNotes);
  };
  const showModal = () => {
    setModalOpen(true);
  };

  const setEdit = note => {
    setEditNote(note);
  };

  async function editNoteHandler(note) {
    //backend request
    await axios.put("http://localhost:3001/api/notes/" + note._id, note);

    const newNotes = [...notes];
    const index = newNotes.findIndex(x => x._id === note._id);
    newNotes[index] = note;
    setNotes(newNotes);
    setModalOpen(false);
  }
  //axios zwraca promisa więc musi być await
  const fetchNotes = async () => {
    const res = await axios.get("http://localhost:3001/api/notes");
    setNotes(res.data);
  };

  useEffect(() => fetchNotes(), []);

  return (
    <div className="notepad">
      <h3 className="title">My notepads</h3>
      <NewNote onAdd={note => addNote(note)} />
      <Modal isOpen={modalOpen} contentLabel="Example modal">
        <button
          style={{ position: "absolute", right: "20px", top: "10px" }}
          className="btn btn-danger"
          onClick={() => setModalOpen(false)}
        >
          X
        </button>
        <EditNote
          onEdit={note => editNoteHandler(note)}
          title={editNote.title}
          desc={editNote.body}
          id={editNote._id}
        />
      </Modal>
      {notes.map(note => (
        <Note
          key={note._id}
          note={note}
          onDelete={id => deleteNote(id)}
          onShow={showModal}
          setEdit={note => setEdit(note)}
        />
      ))}
    </div>
  );
}
