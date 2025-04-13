import React from 'react'

export const BasicFunctions = () => {

    const addTwoNumbers = (a:number, b:number ): string => {
        return (a+b).toString()
    }

  return (
    <>
        <h3>functiones</h3>
        {addTwoNumbers(2,2)}
    </>
  )
}
