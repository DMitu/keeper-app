import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';



function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({title: "", content: ""})

  function handleChange(event){
    const {name, value} = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name] : value
      };
    });
    
  }

  function submitNote(event){
    event.preventDefault();
    props.onAdd(note)
    setNote({
      title: "",
      content: ""
    });
    


  }

  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note" onSubmit={submitNote}>
        {isExpanded && <input onChange={handleChange} name="title" value={note.title} placeholder="Title" />}
        <textarea onClick={expand} onChange={handleChange} name="content" value={note.content} placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
        <Zoom in={isExpanded}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;