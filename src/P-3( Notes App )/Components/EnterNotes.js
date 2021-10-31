import React, { useState, useEffect } from 'react'
import ShowNotes from './ShowNotes'


const EnterNotes = (props) => {

    var initialState = {
        addtitle: "",
        addText: ""
    }

    var initialStateAllNotes = []

    const [state, setState] = useState(initialState)
    const [allNotes, setNotes] = useState(initialStateAllNotes)


    useEffect(() => {
        let temp_notes = localStorage.getItem("notes")
        if (temp_notes !== undefined) {
            initialStateAllNotes = JSON.parse(localStorage.getItem("notes"))
            setNotes(initialStateAllNotes)
            setState(initialState)
        }
    }, [])

    const changeHandler = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        let temp_allNotes = allNotes
        temp_allNotes.push({  ...state })
        setNotes(temp_allNotes)
        setState(initialState)
        localStorage.setItem("notes",JSON.stringify(allNotes))
    }
    
    const removeNotes = (index)=>{
        let temp_allNotes = allNotes
        temp_allNotes.splice(index,1)
        setNotes(temp_allNotes)
        setState(initialState)
        localStorage.setItem("notes",JSON.stringify(allNotes))
    }


    return (
        <>
            <div>
                <h1>Welcome to Magic Notes</h1>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Add a notes</h5>
                        <div className="form-group">
                            <input type="text" className="form-control" id="addtitle" name="addtitle" placeholder="Enter Title here" value={state.addtitle} onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" id="addText" rows="3" name="addText" placeholder="Enter Notes here" value={state.addText} onChange={changeHandler}></textarea>
                        </div>
                        <input type="submit" value="Add notes" className="btn btn-primary" id="addBtn" onClick={submitHandler} />
                    </div>
                </div>
            </div>

            <h1>Your Notes</h1>
            <hr />

            <div id="notes" className="row container-fluid">
                <ShowNotes allNotes = {allNotes} removeNotes = {removeNotes}/>
            </div>

        </>
    )
}

export default EnterNotes
