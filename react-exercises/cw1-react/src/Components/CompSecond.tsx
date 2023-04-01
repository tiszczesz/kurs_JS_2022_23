import React from 'react'

type Props = {
    myName:string;
    age: number
}

const CompSecond = (props: Props) => {
  return (
    <div>
        <span style={{color:"red",fontWeight:"bold"}}>{props.myName}</span> 
        &nbsp;<span style={{color:"green"}}>{props.age}</span>
    </div>
  )
}

export default CompSecond