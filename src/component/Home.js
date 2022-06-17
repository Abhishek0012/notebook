import React from 'react'
import NoteState from '../context/notes/NoteState'
import { useContext } from 'react'

export default function Home() {
    const context = useContext(NoteState);
    const  note = context ? context.note : [] ;
    console.log(note);
    return (
        <div className='container my-3'>
            <h1>Add Note</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {/* <h1 className='my-3'>Your Notes</h1>
            {
                notes.map((note)=>{
                    return note.title ;
                })
            } */}
        </div>
    )
}