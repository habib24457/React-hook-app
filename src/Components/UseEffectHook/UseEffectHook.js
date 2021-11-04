import React,{ useState,useEffect,useContext} from 'react';
import {AppContext} from '../../App';

const UseEffectHook = () => {
    const [users,setUsers] = useState([]);
    const {typedValue} = useContext(AppContext);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data=>setUsers(data))
    },[])

    return (
        <div className="header-style">
            <h1>2)useEffect hook:</h1>
            {
                users.map(user=><li>{user.name}</li>)
            }
         <h4 className="context-value-style">Value from Context API:{typedValue}</h4>

        </div>
    );
};

export default UseEffectHook;