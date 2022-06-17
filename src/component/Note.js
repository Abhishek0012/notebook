import React from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';
export default function Note() {
    const context = useContext(NoteContext);
    const { notes, setNotes } = context;
    console.log(notes);
    return (
        <div>
            <div className="row">
                {
                    notes.map((element) => {
                        return <Noteitem note={element} />
                    })
                }
            </div>
        </div>
    )
}
