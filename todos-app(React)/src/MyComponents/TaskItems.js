import './TaskItem.css'
import React, { useState } from 'react';


function Task(props) {

    const handleClick = (e) =>{
        props.onClick(props.id);
    }

    return(
        <div className='taskSheet' id={props.id}>
            <div>
                <p>{props.title}</p>
            </div>

            <div>
                <input type="button" value="Delete" onClick={handleClick}/>
            </div>

        </div>
    )
}


export default function TaskItems(props) {

    return(
        <div className='content'>

            {props.taskList.map((task)=>{
                return <Task title={task} id={props.taskList.indexOf(task)} onClick={props.onClick}/>
            })}
            
        </div>
    )
}





