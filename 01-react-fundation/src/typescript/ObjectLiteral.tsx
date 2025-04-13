import React from 'react'

interface Person {
  firstName: string;
  fullName: string;
  age: number;
  isAlive?:boolean
  adress: Adress
}

interface Adress {
  country: string;
  houseNomber: number;
}



export const ObjectLiteral = () => {

  const person : Person = {
    fullName: 'Fer herrera',
    age: 28,
    firstName: 'asd'
    ,adress:{
      country: 'arg',
      houseNomber: 4
    },
    isAlive: undefined
  }

const {} = person

  return (
    <>
    <h3>objet literal</h3>
      <pre>
      {JSON.stringify(person,2,null)}
      </pre>
    </>
  )
}

