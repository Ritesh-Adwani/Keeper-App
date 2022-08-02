import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
//import notes from "../notes";
import CreateArea from "./CreateArea";


function App(){

    const [notes, setNotes] = React.useState([]);

    function addNote(newNote){
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id){
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem,index) => {
                return id !== index;
            })
        });
        
    }
    
    return (
        <div>
            <Header />
            <CreateArea 
                onAdd = {addNote}
            />

            {/* In order to be recognized as JS Code, the below lines are wrapped inside curly braces */}
            {notes.map((noteItem,index )=> {
                return (
                    <Note 
                        key = {index}
                        id = {index}
                        title= {noteItem.title}
                        content= {noteItem.content}
                        onDelete = {deleteNote}
                    /> );
                })
            }
              
            <Footer />
        </div>
    );
}

export default App;