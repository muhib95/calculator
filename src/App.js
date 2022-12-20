// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

const [value,setValue]=useState([]);
const handleCalculation=(e)=>{
  let a=[];
  
  a.push(e.target.value);
  // let b=[];
  // b=[..value];
  setValue(a);
  console.log(a);
  // if(e.target.value==='+'){

  // }

}
// console.log(value);

  return (
    <div className="App">
      <div>
{
  value.map((v,index)=><h1 key={index}>{v}</h1>)
}
      </div>

      <div className='w-1/2'>
<ul className='grid grid-cols-3 gap-2'>
  <button className='border-2' value='1' onClick={(e)=>handleCalculation(e)}>1</button>
  <button className='border-2' value='2' onClick={(e)=>handleCalculation(e)}>2</button>
  <button className='border-2' value='3' onClick={(e)=>handleCalculation(e)}>3</button>
  <button  className='border-2' value='4' onClick={(e)=>handleCalculation(e)}>4</button>
  <button className='border-2' value='5' onClick={(e)=>handleCalculation(e)}>5</button>
  <button className='border-2' value='6' onClick={(e)=>handleCalculation(e)}>6</button>
  <button className='border-2' value='7' onClick={(e)=>handleCalculation(e)}>7</button>
  <button className='border-2' value='8' onClick={(e)=>handleCalculation(e)}>8</button>
  <button className='border-2' value='9' onClick={(e)=>handleCalculation(e)}>9</button>
  <button className='border-2' value='0' onClick={(e)=>handleCalculation(e)}>0</button>
  <button className='border-2' value='+' onClick={(e)=>handleCalculation(e)}>+</button>
  <button className='border-2' value='-' onClick={(e)=>handleCalculation(e)}>-</button>
  <button className='border-2' value='*' onClick={(e)=>handleCalculation(e)}>*</button>
  <button className='border-2' value='/' onClick={(e)=>handleCalculation(e)}>/</button>
  <button className='border-2' value='=' onClick={(e)=>handleCalculation(e)}>=</button>
</ul>
      </div>
     
    </div>
  );
}

export default App;
