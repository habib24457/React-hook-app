import React,{ useState,useContext} from 'react';
import './UseStateHook.css';
import {AppContext} from '../../App';

const UseStateHook = () => {
    const [wordCounter,setWordCounter] = useState(0);
    const {typedValue} = useContext(AppContext);
    return (
        <div className="header-style">
            <h1>1)useState hook:</h1>
            <h3>Write something</h3> <p>{wordCounter}/100</p>
            <textarea 
            onChange={(e)=>{setWordCounter(e.target.value.length)}}
            type="text" 
            maxLength={100}
            className="text-area-design"/>
            <h4 className="context-value-style">Value from Context API:{typedValue}</h4>
        </div>
    );
};

export default UseStateHook;