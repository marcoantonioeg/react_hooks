import React, {useEffect, useState, useRef} from 'react'

const Todo = () => {
    const isMounted = useRef(true)
    const [loading, setLoading] = useState(true)
    const [todo, setTodo] = useState({})
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((res)=> res.json())
        .then((data)=>{
            setTimeout(() => {
                setTodo(data)
                setLoading(false)
            }, 3000);
        })
        //Runs when component is unmounted
        return () =>{
            console.log(123);
        }
    }, [])
  return loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>
}

export default Todo