import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import { Zoom } from '@mui/material';

function CreateArea(props) {

    const [note,setNote] = React.useState({
        title:"",
        content:""
    });

    const[isExpanded,setExpanded] = useState(false);


    function handleChange(event){
        const {name,value} = event.target;

        setNote(prevValue => {
            return {
                ...prevValue,
                [name] : value
            };
        });
    }

    function submitNote(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        });
        event.preventDefault();
    }

    function expand(){
        setExpanded(true);
    }

    return (
        <div>
        <form className="create-note">
            {isExpanded ? (
            <input 
            name="title" 
            placeholder="Title" 
            value={note.title}
            onChange = {handleChange}
            />) : null
            }
            
            <textarea 
                name="content" 
                placeholder="Take a note..." 
                value={note.content}
                onClick={expand}
                rows={isExpanded ? 3 : 1}   
                onChange = {handleChange}
            />
            <Zoom in={isExpanded}>
                <Fab onClick={submitNote}>
                    <AddIcon />
                </Fab>
            </Zoom> 
        </form>
        </div>
    );
    }

export default CreateArea;