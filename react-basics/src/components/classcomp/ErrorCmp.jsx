import React from 'react'

const ErrorCmp = ({username}) => {
    if(username == 'Joker'){
        throw new Error("Invalid Name")
    }
  return (
    <div>
        <h1>{username}</h1>
    </div>
  )
}

export default ErrorCmp
