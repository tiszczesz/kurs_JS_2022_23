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
    <div className='row gap-2'>
        <input className='col-2' type="text" placeholder='dodaj imię' onChange={(e)=>{
            console.log(e.target.value);
            setText(e.target.value);
            console.log(`text = ${text}`);            
            }} />
             <input className='col-2' type="text" placeholder='dodaj nazwisko' onChange={(e)=>{
            console.log(e.target.value);
            setText(e.target.value);
            console.log(`text = ${text}`);            
            }} />
             <input className='col-2' type="text" placeholder='dodaj email' onChange={(e)=>{
            console.log(e.target.value);
            setText(e.target.value);
            console.log(`text = ${text}`);            
            }} />
             <input  className='btn btn-secondary col-3' type='button' value="Zapisz" />
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