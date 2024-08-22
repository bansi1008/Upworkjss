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

</div>
  </>
  )
}
