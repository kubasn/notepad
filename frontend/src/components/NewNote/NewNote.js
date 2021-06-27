import React, { useState } from "react";
export default function NewNote(props) {
  const [click, setClick] = useState(false);
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const submit = () => {
    const note = {
      title,
      body: desc,
    };
    props.onAdd(note);
    setTitle("");
    setDesc("");
    setClick(false);
  };
  const close = () => {
    setClick(false);
  };
  return click ? (
    <div className="note form-group">
      <button
        className="btn btn-danger"
        style={{
          position: "absolute",
          right: "55px",
          top: "93px",
          width: "40px",
          height: "33px",
        }}
        onClick={() => close()}
      >
        X
      </button>
      <label style={{ fontWeight: "bold" }}>Podaj tytył</label>
      <input
        onChange={e => setTitle(e.target.value)}
        value={title}
        className="form-control"
        type="text"
      />
      <label style={{ fontWeight: "bold" }}>Podaj treść notatki</label>
      <input
        onChange={e => setDesc(e.target.value)}
        value={desc}
        className="form-control"
        type="text"
      />
      <button onClick={() => submit()} className="btn btn-primary mt-2">
        Dodaj
      </button>
    </div>
  ) : (
    <button
      onClick={() => setClick(true)}
      style={{ marginLeft: "10px" }}
      className="btn btn-primary mb-2"
    >
      Dodaj notatke
    </button>
  );
}
