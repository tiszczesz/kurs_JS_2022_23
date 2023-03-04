import React from 'react'
import  motylek  from "../Images/motylek.jpg";

type Props = {
    title:string;
    myColor:string;
}

const Image = (props: Props) => {
  return (
    <div>
        <img style={{width:200}} src={motylek} alt="obrazek motylka" />
        <div style={{color:props.myColor}}>{props.title}</div>
    </div>
  )
}
export default Image;