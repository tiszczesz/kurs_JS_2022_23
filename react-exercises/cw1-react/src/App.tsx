import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyComponent from './Components/MyComponent';
import Image from './Components/Image';
import ClassComp from './Components/ClassComp';

function App() {
  const name = "Alojzy";
  return (
    <div className="container">
      <h1>Moja aplikacja</h1>
      <div >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur reiciendis laborum dolorum laudantium voluptate sint eius amet necessitatibus facere expedita nulla, tenetur molestiae sed a commodi perspiciatis ad! Est.
      </div>
      <MyComponent />
      <div>Moje dane: {name}
        wynik: {2 * 34 - 12} <br />
        data: {new Date().toLocaleDateString()}</div>
        <Image title='Ładny różowy motylek' myColor='green' />
        <h3>Komponent Klasowy</h3>
        <ClassComp firstname='Roman' lastname='Boman' />
    </div>
    




  );
}

export default App;
