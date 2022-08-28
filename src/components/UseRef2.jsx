import React, {useRef, useState, useEffect} from 'react'

const UseRef2 = () => {
    const renders = useRef(1)
    //obtengo el nombre previo
    const prevName = useRef('')
    const [name, setName] = useState('')
    useEffect(()=>{
        renders.current = renders.current + 1
        prevName.current = name
    }, [name])
  return (
    <div>
        <h1>Renders: {renders.current}</h1>
        <h2>PrevName: {prevName.current}</h2>
        <input type="text" className='form-control mb-3' value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
  )
}

export default UseRef2