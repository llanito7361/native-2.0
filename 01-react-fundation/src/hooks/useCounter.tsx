import { useState } from "react"

// props o mejor OPTIONS as the nombre
interface Options{
    initialValue:number
}


const useCounter = ({initialValue=0}:Options) => {
    const [count, setCount] = useState<number>(initialValue)

    const increaseBy = (value:number) => {
        setCount(count+value)
    }

    function decrement(value:any){
        setCount(prev => prev-value)
    }

  return {
    count, increaseBy, decrement
  }
}

export default useCounter