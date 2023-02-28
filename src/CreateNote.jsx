import React, { useState } from "react";
// import Button from '@material-ui/core/Button';
// import AddIcon from '@material-ui/icons/Add';

const CreateNote = () => {

    const [note,setNote]=useState({
        title:'',
        content:'',
    })

    const InputEvent=(event)=>{

const {name,value}=event.target;

        setNote((PrevData)=>{
            return({
                ...PrevData,
                [name]:value
            })
        })
    }
    const AddEvent=()=>{
        props.passNote(note);
    }
    return (
        <>
            <div className="main_note">
                <form>
                    <input type="text" placeholder="Title" value={note.title} onChange={InputEvent}  name="title"/>
                    <textarea column="" rows="" placeholder="Write a note.." value={note.content} onChange={InputEvent} name="content"></textarea>
                    <button onClick={AddEvent}>+</button>

                </form>
            </div>
        </>)
}

export default CreateNote




