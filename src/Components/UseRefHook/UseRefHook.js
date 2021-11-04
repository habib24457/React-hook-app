import React,{useRef,useState,useContext} from 'react';
import {AppContext} from '../../App';

const UseRefHook = () => {
    const inputName = useRef(null);
    const [name,setName] = useState(null);
    const {typedValue} = useContext(AppContext);

    const handleClick=()=>{
        setName(inputName.current.value);
    }

    return (
        <div className="header-style">
            <h1>4)useRef hook:</h1>
                <input type="text" placeholder="Write a name..." ref={inputName}/>
                <button onClick={()=>{handleClick()}}>Show me the name</button>
                <p>You have written <span style={{color: 'green'}}>{name}</span></p>
                <h4 className="context-value-style">Value from Context API:{typedValue}</h4>
        </div>
    );
};

export default UseRefHook;