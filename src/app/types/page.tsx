import React from 'react'
import Greet from '@/components/Greet'
import User from  '@/components/User'
import { PersonList } from '@/components/PersonList'

const page = () => {

const user  = {
    name:"srini",
    email:"srini01@gmail.com",
    mobile:"9381003591"
}
const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]
  return (
     <>
     <Greet  greeting="GoodEvening" />
     <Greet  greeting="GoodMorning" />
     <Greet  greeting="GoodAfternoon" />
     
     <PersonList names={nameList} />
  
     </>
  )
}

export default page