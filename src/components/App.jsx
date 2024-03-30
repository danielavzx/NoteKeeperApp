import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import phase2Data from "../notes";

function App() {
  const [note1, setNote1] = useState(phase2Data);
  const [note2, setNote2] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote2((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    setNote1((prevNotes) => [...prevNotes, note2]);
    setNote2({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function deleteNote(id) {
    setNote1((prevNotes) => prevNotes.filter((note, index) => index !== id));
  }

  return (
    <div>
      <Header />
      <div className="create-area">
        <form onSubmit={submitNote}>
          <input
            name="title"
            onChange={handleChange}
            value={note2.title}
            placeholder="Title"
          />
          <textarea
            name="content"
            onChange={handleChange}
            value={note2.content}
            placeholder="Take a note..."
            rows="3"
          />
          <button type="submit">Add</button>
        </form>
      </div>
      {note1.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
