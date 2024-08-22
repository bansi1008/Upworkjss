  import React, {useState} from 'react'

  export default function Textc(props) {
      const [ text , SetText]=useState('');
      let x= text.split('').length;

      const onclick = ()=>{
          console.log("you clicked");
          let newText = text.toUpperCase();
          SetText(newText);
          props.showalert("converted to Uppercase", "success");
         
      }

      const hide= ()=>{
        SetText(" ");
      }
      const handleon =(event) =>{
          console.log("hande on");
          SetText(event.target.value);
      };

      const bgClass = `bg-${props.myst==='light'?'light':'secondary'}`;
      console.log('Current bgClass:', bgClass); // For debugging
    return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">

    
  <textarea className={`form-control ${bgClass} text-${bgClass}`} id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleon}  ></textarea>
      </div>

      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
    <button className="btn btn-primary me-md-2" type="button" onClick={onclick}>uppercase</button>
    <button className="btn btn-primary" type="button"  onClick={hide}>Hide</button>
  </div>


    <div className="container">
      <h1>hello there</h1>
      <p>{text.split(" ").length} words</p>
      

      <p>  you take this much amount of time to read above word: {x*0.008} minutes</p>
    </div>
      
  </div>
    

    )
  }
