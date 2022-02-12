import React, { useState } from 'react';

function App() {
  const state = useState();  //hooks for changing value
  var time;
  const [thistime,setfunc]=useState(time);
        //current   Updated    initial
         // value    Value       value
/*   const interval = useRef(0); */
      
      const func=()=>{
        var sec,min,time;
const d=new Date();
var hrs=d.getHours();
if(hrs>=0 && hrs<=11){
    if(hrs>=0 && hrs<=9){
    hrs="0"+d.getHours();
    }
     sec=d.getSeconds();
    if(sec>=0 && sec<=9){
      sec="0"+d.getSeconds();
    }
     min=d.getMinutes();
    if(min>=0 && min<=9){
      min="0"+d.getMinutes();
    }
 time = `${hrs}:${min}:${sec} AM`;
}
else{
   sec=d.getSeconds();
  if(sec>=0 && sec<=9){
    sec="0"+d.getSeconds();
  }
   min=d.getMinutes();
  if(min>=0 && min<=9){
    min="0"+d.getMinutes();
  }
  time = `${hrs}:${min}:${sec} PM`;
}
        setfunc(time);
        }    
        setInterval(func, 1000);

    return (
        <>
            <h1 className="time">{thistime}</h1>
        </>
    );
}
export default App;