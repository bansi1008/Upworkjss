// src/App.js

import React, { useState } from 'react';
import Navv from './component/Navv';
import Test from './component/Test';
import Form from './component/Form';
import JobSuccessScoreCalculator from './component/JobSuccessScoreCalculator';
import Car from './component/Car'
import Hello from './component/Hello';



function App() {

    const [myst, setmyst]  = useState('light')
    const [alert, setAlert]=useState(null)

    const showalert=(msg,mystatus)=>{
        setAlert({ msg:msg,
            mystatus:mystatus})

            setTimeout(() => {
                setAlert(null);
            }, 900);
       
    }

    


    

    const togel = ()=>{
        if(myst==='light'){
            setmyst('dark');
            document.body.style.backgroundColor="grey";
            showalert("Dark mode is enabled", "success");
            document.title="dark mode is enabled"

           
        }
        else{
            setmyst('light');
            document.body.style.backgroundColor="white";
            showalert("light mode is enabled", "success");
          
        }
    }
    return (
        <div>
           
          

        
         <Hello/>

    
           </div>
      
    );
}

export default App;



