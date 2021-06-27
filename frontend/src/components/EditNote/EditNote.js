import React, { useState } from "react";

export default function EditNote(props) {
  const [title, setTitle] = useState(props.title);
  const [desc, setDesc] = useState(props.desc);

  const changeTitleHandler = e => {
    const value = e.target.value;
    setTitle(value);
  };
  const changeDescHandler = e => {
    const value = e.target.value;
    setDesc(value);
  };
  const editNote = () => {
    const note = {
      title: title,
      body: desc,
      _id: props.id,
    };
    props.onEdit(note);
  };
  return (
    <div className="note form-group">
      <h2>Edytuj notatke</h2>
      <label style={{ fontWeight: "bold" }}>Tytuł</label>
      <input
        value={title}
        className="form-control"
        type="text"
        onChange={changeTitleHandler}
      ></input>
      <label style={{ fontWeight: "bold" }}>Treść notatki</label>
      <input
        value={desc}
        className="form-control"
        type="text"
        onChange={changeDescHandler}
      ></input>
      <button onClick={editNote} className="btn btn-primary mt-2">
        Zapisz
      </button>
    </div>
  );
}
