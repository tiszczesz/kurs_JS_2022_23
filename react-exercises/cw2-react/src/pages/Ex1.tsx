import React, { useState } from 'react'
import { GetAll,Contact } from '../models/Dane';


//type Props = {}
const initialContacts = GetAll();
function Ex1() {        
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [contacts,setContacts] = useState(initialContacts)

    function clickHandler(): void {    
        const contact = new Contact(firstName,lastName,email);    
        //contacts.push(contact)
        setContacts((contacts)=>[...contacts,contact])
        setFirstName("");
        setLastName("");
        setEmail("");
        console.log(contacts);        
    }

    // let text="na początek";
  return (
    <>
    <h1>Ćwiczenie 1</h1>
    <h3>Zbiór kontaktów</h3>
    <div className='row gap-2'>
        <input className='col-2' type="text" placeholder='dodaj imię' value={firstName} onChange={(e)=>{
            console.log(e.target.value);
            setFirstName(e.target.value);
            
            //console.log(`text = ${firstName}`);            
            }} />
             <input className='col-2' type="text" placeholder='dodaj nazwisko' value={lastName} onChange={(e)=>{
            console.log(e.target.value);
            setLastName(e.target.value);
            //console.log(`text = ${firstName}`);            
            }} />
             <input className='col-2' type="text" placeholder='dodaj email' value={email} onChange={(e)=>{
            console.log(e.target.value);
            setEmail(e.target.value);
            //console.log(`text = ${firstName}`);            
            }} />
             <input  className='btn btn-secondary col-3' type='button' value="Zapisz" onClick={clickHandler} />
        <div>{firstName} {lastName} {email}</div>
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