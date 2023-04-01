import React, { useState } from 'react'
import { GetAll,Contact } from '../models/Dane';
import { log } from 'console';

//type Props = {}

function Ex1() {
    const contacts = GetAll();
    console.log(contacts);
    const [text,setText] = useState("na początek");
    // let text="na początek";
  return (
    <>
    <h1>Ćwiczenie 1</h1>
    <h3>Zbiór kontaktów</h3>
    <div>
        <input type="text" placeholder='dodaj kontakt' onChange={(e)=>{
            console.log(e.target.value);
            setText(e.target.value);
            console.log(`text = ${text}`);            
            }} />
        <div>{text}</div>
    </div>
    <ul className='list-group'>
        {contacts.map((elem)=>
             (
                <li className='list-group-item' key={elem.firstName}>{elem.firstName} {elem.lastName} {elem?.email} </li>
            )
        )}
    </ul>
    </>
    
  )
}

export default Ex1