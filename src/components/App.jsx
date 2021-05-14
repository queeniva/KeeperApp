import React from "react"
import Footer from "./footer";
import Header from "./Header";
import Note from "./note";
import notes from "../note.js"

function newNote(notes){
    return(
        <Note 
        title = {notes.title}
        content = {notes.content}
        />
    )
}

function App(){
    return(
        <div>
            <Header />
            {notes.map(newNote)}
            <Footer />
        </div>
    )
}
export default App;