import { useState } from "react"
import useCounter from "../hooks/useCounter"

const CounterWithHook = () => {

    const {
        count, increaseBy, decrement
      }= useCounter({initialValue:0})
  

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

export default CounterWithHook