import { useState } from "react"

const Counter = () => {

    const [count, setCount] = useState(10)

    const increaseBy = (value:number) => {
        setCount(count+value)
    }

    function decrement(value:any){
        setCount(prev => prev-value)
    }

  return (
    <>
        <h3>contador :<small>{count}</small></h3>
        <div>
            <button onClick={()=>increaseBy(2)}>+</button>
            &nbsp;
            <button onClick={()=>decrement('3')}>-</button>
        </div>

    </>
  )
}

export default Counter