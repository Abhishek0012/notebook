import React from 'react'

export default function Noteitem(props) {
    let { title, description, tag } = props.note;
    return (
        <div className='col-md-4'>
            <div className="card my-3">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates explicabo hic dignissimos, placeat tempore laboriosam! Accusamus deserunt excepturi itaque esse?</p>
                    <p className="card-text">{tag}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}
