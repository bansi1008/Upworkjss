import React, { useState } from 'react'

export default function About(props) {

     const [myst, setmyst]  = useState( {
        color :'black',
        backgroundColor: 'light'
    })

    const [btntext, setBtn]= useState("enable dark mode")

  const dark=() =>{
    if(myst.color ==='dark'){
        setmyst({
             color :'light',
        backgroundColor: 'dark'
        })
        setBtn("enable light mode")
    }

    else{
        setmyst({
            color :'dark',
       backgroundColor: 'light'
       })
       setBtn("enable dark mode")
    }
  }

  const bgClass = `bg-${props.myst==='light'?'light':'secondary'}`;


  return (

<div>
       
      <div className={`accordion ${bgClass} text-${bgClass}`} id="accordionExample" style={myst}>
      <h1>About us</h1>
  <div className={`accordion-item ${bgClass} text-${bgClass}`}>
    <h2 className="accordion-header">
      <button className={`accordion-button ${bgClass} text-${bgClass}`} style={myst} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne"  className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myst}>
    <h2 className="accordion-header">
      <button className={`accordion-button ${bgClass} text-${bgClass}`}  style={myst} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" style={myst} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header text-light" style={myst}>
      <button className={`accordion-button ${bgClass} text-${bgClass}`}  style={myst} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree"  style={myst} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

<button className="btn btn-primary" onClick={dark} >{btntext}</button>

    </div>
  )
}
