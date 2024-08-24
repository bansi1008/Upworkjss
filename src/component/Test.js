import React, { useState } from 'react'

const user = {
  name: 'Binka Patel',
  imageUrl: 'https://www.upwork.com/profile-portraits/c1W02tM8qWkb3RBLTdsTxKoxlc2Fv56np-nZhreQr-LRiLoLVWecltvav8035VbdCp',
  imageSize: 90,
};

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];



export default function Test(props) {

const list=products.map(product=>
    <li key={product.id} style={{color: product.isFruit ? 'magenta' : 'darkgreen' }}>
      {product.title} 
    </li>
)

   const filteredProducts = products.filter(product => product.id === 2 || product.id === 3 );

   
   const [count, setCount]=useState(0);

   function handle(){
    setCount(count+1);
     }

     const [count1, setcount1] = useState(0);
    const[dislike, setdislike]=useState(0);

    const a=()=>{
        setcount1(count1+1);
    }

    const b= ()=>{
      setdislike(dislike+1);
    }

    let[colour, setcolour]=useState("");

    const r1=()=>{
      setcolour(colour="danger")
    }

     const g1=()=>{
      setcolour(colour="success")
    }

    const y1=()=>{
      setcolour(colour="warning")
    }

    const b1=()=>{
      setcolour(colour="primary")
    }



  const textColorClass = `text-${props.myst === 'light' ? 'black' : 'light'}`;

  return (
    <>
   
    <img className="avatar" src={user.imageUrl} alt={'Photo of ' + user.name} style={{  width: user.imageSize,  height: user.imageSize  }}/>
    <div className={textColorClass}>
     <h2 >{user.name}</h2>
     </div>
    
     
     <div>
     <ul>
          {filteredProducts.map(product => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>

</div>
<button onClick={handle}>click here={count}</button>


<div>
   <button onClick={a}>hit like={count1}</button>
   <button onClick={b}>hit dislike={dislike }</button>
</div>

<div>

<p className= {`text-${colour}`}>Hello bansi</p>
</div>

<div>

<textarea className= {`text-${colour}`} name="text" id=""></textarea>

</div>
<div>
  <button className="btn btn-danger me-md-2" type="button" onClick={r1}>red</button>
   <button className="btn btn-success me-md-2" type="button" onClick={g1} >green</button>
   <button className="btn btn-warning me-md-2" type="button"  onClick={y1} >Yellow</button>
   <button className="btn btn-primary me-md-2" type="button"  onClick={b1}>blue</button>
</div>
  </>
  )
} 
