import React from 'react'
const Greet = (props) => {
  return (<h1>Hello {`${props.name} ${props.surname}`}</h1>)
}

export default Greet