import { useState } from "react"


const useLocalStorage = (key, initialValue) => {
    const [localStorageValue, setLocalStorageValue] = useState(()=> getLocalStorageValue(key, initialValue))
    const setValue = (value) =>{
        //checar si es function
        const valueToStore = value instanceof Function ? value(localStorageValue) : value
        //set to state
        setLocalStorageValue(value)
        //set to localstorage
        localStorage.setItem(key, JSON.stringify(valueToStore))
    }
 return [localStorageValue, setValue]
}
function getLocalStorageValue(key, initialValue){
    const iteFromStorage = localStorage.getItem(key)
    return iteFromStorage ? JSON.parse(iteFromStorage) : initialValue
}
export default useLocalStorage