import { useState } from "react";
export default function Note(props) {
  const id = props.note.id;
  const [show, setShow] = useState(false);
  function checkDesc() {
    setShow(show ? false : true);
  }
  function modalFunction() {
    props.setEdit(props.note);
    props.onShow();
  }

  return (
    <div className="note">
      <h5 onClick={checkDesc}>{props.note.title}</h5>
      {show ? <p>{props.note.body}</p> : null}
      <button
        onClick={() => props.onDelete(props.note._id)}
        className="buttom btn btn-danger "
      >
        Usuń
      </button>
      <button onClick={modalFunction} className="buttom btn btn-warning">
        Edytuj
      </button>
    </div>
  );
}
