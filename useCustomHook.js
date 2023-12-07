import {useState} from "react"

const useCustomHook = (initialValue) => {
    const [someValue, setSomeValue] = useState(initialValue)
    
    const someFunction = () => {        
        setSomeValue("abcdefgh")
    }
    
    return { someValue, someFunction }
}

export default useCustomHook