import React, {useState, useEffect, useRef, useMemo} from 'react'

const UseMemo1 = () => {
    const [number, setNumber] = useState(1)
    const[inc, setInc] = useState(0)
    const sqrt = useMemo(()=>getSqrt(number), [number])
    const onClick = ()=>{
        setInc((prevState)=>{
            console.log(prevState + 1);
            return prevState + 1
        })
    }
    const renders = useRef(1)
    useEffect(()=>{
        renders.current = renders.current + 1
    })
  return (
    <div>
        <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} className='form-control w-25' />
        <button className='btn btn-primary' onClick={onClick}>ReRENDER</button>
        <h2 className='my-3'>Thge square Root of {number} is {sqrt}</h2>
        <h3>Renders: {renders.current}</h3>
    </div>
  )
}
function getSqrt(number){
    for(let i = 0; i <= 10000; i++){
        console.log(i)
    }
    console.log('Expensive Function Called');
    return Math.sqrt(number)
}
export default UseMemo1