import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) =>{
    const noteInitial = 
    [
        {
          "_id": "629e096a032a2b1055bb69b5",
          "user": "629caaa7f1d3b2d8ac08ebd5",
          "title": "second post",
          "description": "letter11fdfdcdcdbwehdbwehdbdbx",
          "tag": "general",
          "__v": 0
        },
        {
          "_id": "629e096c032a2b1055bb69b7",
          "user": "629caaa7f1d3b2d8ac08ebd5",
          "title": "second post",
          "description": "letter11fdfdcdcdbwehdbwehdbdbx",
          "tag": "general",
          "__v": 0
        },
        {
          "_id": "629e096d032a2b1055bb69b9",
          "user": "629caaa7f1d3b2d8ac08ebd5",
          "title": "second post",
          "description": "letter11fdfdcdcdbwehdbwehdbdbx",
          "tag": "general",
          "__v": 0
        },
        {
          "_id": "62abadb72f52820f044f483f",
          "user": "629caaa7f1d3b2d8ac08ebd5",
          "title": "second post",
          "description": "letter11fdfdcdcdbwehdbwehdbdbx",
          "tag": "general",
          "__v": 0
        },
        {
          "_id": "62abb18a495117e230df6876",
          "user": "629caaa7f1d3b2d8ac08ebd5",
          "title": "second post",
          "description": "letter11fdfdcdcdbwehdbwehdbdbx",
          "tag": "general",
          "__v": 0
        },
        {
          "_id": "62abb194495117e230df6878",
          "user": "629caaa7f1d3b2d8ac08ebd5",
          "title": "THird post",
          "description": "Changed ",
          "tag": "YouTube",
          "__v": 0
        },
        {
            "_id": "629e096a032a2b1055bb69b5",
            "user": "629caaa7f1d3b2d8ac08ebd5",
            "title": "second post",
            "description": "letter11fdfdcdcdbwehdbwehdbdbx",
            "tag": "general",
            "__v": 0
          },
          {
            "_id": "629e096c032a2b1055bb69b7",
            "user": "629caaa7f1d3b2d8ac08ebd5",
            "title": "second post",
            "description": "letter11fdfdcdcdbwehdbwehdbdbx",
            "tag": "general",
            "__v": 0
          },
          {
            "_id": "629e096d032a2b1055bb69b9",
            "user": "629caaa7f1d3b2d8ac08ebd5",
            "title": "second post",
            "description": "letter11fdfdcdcdbwehdbwehdbdbx",
            "tag": "general",
            "__v": 0
          },
          {
            "_id": "62abadb72f52820f044f483f",
            "user": "629caaa7f1d3b2d8ac08ebd5",
            "title": "second post",
            "description": "letter11fdfdcdcdbwehdbwehdbdbx",
            "tag": "general",
            "__v": 0
          },
          {
            "_id": "62abb18a495117e230df6876",
            "user": "629caaa7f1d3b2d8ac08ebd5",
            "title": "second post",
            "description": "letter11fdfdcdcdbwehdbwehdbdbx",
            "tag": "general",
            "__v": 0
          },
          {
            "_id": "62abb194495117e230df6878",
            "user": "629caaa7f1d3b2d8ac08ebd5",
            "title": "THird post",
            "description": "Changed ",
            "tag": "YouTube",
            "__v": 0
          }
      ]
      const [notes,setNotes] = useState(noteInitial);
    return (
       <NoteContext.Provider value={{notes,setNotes}}>
          {props.children}
       </NoteContext.Provider>
    )
}
export default NoteState ;