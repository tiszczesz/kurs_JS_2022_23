import React, { useState } from 'react'

//type Props = {}

function Ex2() {
    const [text, setText] = useState("");
    const [result, setResult] = useState([1]);
    function clickHandler(): void {
        const numbers = text.split(',');
        let numbers2 = numbers.map((elem)=>parseInt(elem))
        
        numbers2.sort((a,b)=>a-b);
        setResult([...numbers2]);
        console.log(result);        
    }

    return (
        <>
            <div>Ćwiczenie 2</div>
            <input type="text" placeholder='zbiór liczb np 4,6,89,3'
                onChange={(e) => setText(e.target.value
                )} />
            <input type="button" value="SORTUJ" onClick={clickHandler} />
            <div>
                
                {result.map((elem) => (
                    <span key={elem}>{elem} </span>
                ))}
            </div>
        </>

    )
}

export default Ex2