import React, { useState } from 'react';
import './App.css';
import CreateArea from './components/CreateArea';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";




function App(){

  const [notes, setNotes] = useState([]);

  function addNote ({title, content}) {
    if(title.length > 0 && content.length) {
      setNotes(prev => [{title, content},...prev]);
    }
    
  }

  function deleteNote(id){
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
       return index !== id;
      });
    });

  }

  return <React.StrictMode>
  <Header />
  <CreateArea 
    onAdd={addNote}
  />
  {notes.map((noteItem, index) => {
    return <Note 
      key={index}
      id={index}
      title={noteItem.title}
      content={noteItem.content}
      onDelete={deleteNote}
    />
  })}
  
  <Footer />
</React.StrictMode>
}

export default App;
