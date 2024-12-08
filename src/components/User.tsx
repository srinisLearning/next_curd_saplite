import React from 'react'

type User = {
  name:string,
  email:string,
  mobile:string,
  

}

const User = (user:User) => {

    
  return (
    <>
    {user.name}
    {user.email}
    {user.mobile}    
    </>
  )
}

export default User