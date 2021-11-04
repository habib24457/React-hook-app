import React,{ useState,createContext} from 'react';
import './App.css';
import UseStateHook from'./Components/UseStateHook/UseStateHook';
import UseEffectHook from './Components/UseEffectHook/UseEffectHook';
import UseReducerHook from './Components/UseReducerHook/UseReducerHook';
import UseRefHook from './Components/UseRefHook/UseRefHook';
import UseContextHook from './Components/UseContextHook/UseContextHook';

export const AppContext = createContext(null);

function App() {
  const [typedValue,setTypedValue] = useState("");
  console.log(typedValue);
  return (
    <AppContext.Provider value={{typedValue,setTypedValue}}>
      <UseStateHook></UseStateHook>
      <UseEffectHook></UseEffectHook>
      <UseReducerHook></UseReducerHook>
      <UseRefHook></UseRefHook>
      <UseContextHook></UseContextHook>
    </AppContext.Provider>
  );
}

export default App;
