import React,{useContext,useRef} from 'react';
import {AppContext} from '../../App';

const UseContextHook = () => {
    const inputValue = useRef("");
    const {setTypedValue} = useContext(AppContext);

    const handleChange=() => {
        setTypedValue(inputValue.current.value);
    }

    return (
        <div className="header-style">
            <h1>5)useContext hook:</h1>
            <input type="text"
            style={{width:'450px',height:'40px'}}
            onChange={()=>{handleChange()}} 
            placeholder="Type anything and it will appear in other components.." 
            ref={inputValue}/>
        </div>
    );
};

export default UseContextHook;