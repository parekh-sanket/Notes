import React from 'react'
import Navbar from './Components/Navbar'
import EnterNotes from './Components/EnterNotes'
import ShowNotes from './Components/ShowNotes'

const Notes = () => {


    return (
        <>
            <Navbar />
            <div className="container my-3">
                <EnterNotes />
            </div>
        </>
    )
}

export default Notes
