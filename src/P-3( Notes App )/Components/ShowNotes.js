import React from 'react'

const ShowNotes = (props) => {

    const {allNotes,removeNotes} = props

    return (
        <>
            {
                allNotes.map((obj,index) => {
                    return (
                        <div className="noteCard my-2 mx-2 card" style={{ "width": "18rem" }} key = {index}>
                            <div className="card-body">
                                <h5 className="card-title">{ obj.addtitle }</h5>
                                <p className="card-text">{ obj.addText }</p>
                                <button id={index}  className="btn btn-primary" onClick = {() => removeNotes(index)}>Delete Notes</button>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}

export default ShowNotes
