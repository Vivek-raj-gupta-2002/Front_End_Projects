import './Banner.css'
import React, { useState } from 'react';



export default function Banner(props) {
    
    const [title, setTitle] = useState('');

    const handleClick = (e) => {

        if(title !== ''){
            e.preventDefault();
            props.onClick(title);

            setTitle('')
        }else{
            alert('Please Type Some Thing')
        }
    }

    const handleChange = (e) => {
        setTitle(e.target.value);
        
    }
    

    return(

        <div className='banner'>
            <div className='centre'>
            <input id='title' type='text' placeholder='Discribe Task' value={title} onChange={handleChange}/>
            <input type="button" value="Add Task" onClick={handleClick}/>
            </div>
        </div>
    )
}