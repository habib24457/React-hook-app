import React,{useReducer,useContext} from 'react';
import {AppContext} from '../../App';

const reducer=(state,action)=>{
    switch(action.type){
        case "INCREMENT":
            return { count:state.count+1,showText:state.showText}
        case "CHANGE_SHOW_TEXT":
            return {count:state.count,showText:!state.showText}
        default:
            return state;
    }
}

const UseReducerHook = () => {
    const [state,dispatch] = useReducer(reducer,{count:0,showText:false});
    const {typedValue} = useContext(AppContext);
    return (
        <div className="header-style">
            <h1>3)useReducer hook</h1>
            <p>{state.count}</p>
            {state.showText && <p>This text is true.</p>}
            <button
            onClick={()=>{
                dispatch({type:"INCREMENT"})
                dispatch({type:"CHANGE_SHOW_TEXT"})
            }}
            >Change States at Once</button>
         <h4 className="context-value-style">Value from Context API:{typedValue}</h4>

        </div>
    );
};

export default UseReducerHook;