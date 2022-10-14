import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';


function Note(props){

function handleClick(){
  props.onDelete(props.id);
}

return <React.StrictMode>
    <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>
          <DeleteIcon />
        </button>
    </div>
  </React.StrictMode>
}
export default Note;