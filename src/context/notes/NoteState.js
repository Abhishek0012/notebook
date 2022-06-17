import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = props=>{
    const noteInitial = 
        {
          "_id": "62abb194495117e230df6878",
          "user": "629caaa7f1d3b2d8ac08ebd5",
          "title": "THird post",
          "description": "Changed ",
          "tag": "YouTube",
          "__v": 0
        }
      const [note,setNote] = useState(noteInitial);
      console.log(note);
    return (
       <NoteContext.Provider value={{note,setNote}}>
          {props.children}
       </NoteContext.Provider>
    )
}
export default NoteState ;