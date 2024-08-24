import React, { useState } from 'react';

const cars = [
    { id: 1, name: "Ford", model: "Mustang", year: 1969 },
    { id: 2, name: "BMW", model: "M3", year: 2020 },
    { id: 3, name: "Hyundai", model: "Elantra", year: 2018 },
    { id: 4, name: "Toyota", model: "Corolla", year: 1995 }
];



export default function Car() {

    const [cars1,setcars1]=useState(cars);
    const deletecar=(id)=>{
            const  up = cars1.filter(car=>car.id  !== id);
            setcars1(up);
        
             
    };
  return (
    <div>   
      <ul>
       {
        cars1.map(car=>(
            <li key={car.id}>{car.name} {car.model} {car.year}
            <button onClick={() => deletecar(car.id)}>Delete</button>

            </li>
        ))}
      </ul>
    </div>
  );
}
