import React, {useRef} from 'react'

const UseRef1 = () => {
    const inputRef = useRef()
    const onSubmit = e =>{
        e.preventDefault()
        console.log(inputRef.current.value)
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Name</label>
            <input ref={inputRef} type="text" id='name' />
            <button className='btn btn-primary' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default UseRef1