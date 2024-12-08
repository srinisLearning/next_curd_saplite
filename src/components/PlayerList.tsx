 import React from 'react'
 import { PrismaClient } from '@prisma/client'
import DeleteCompnent from './DeleteCompnent'
import EditComponent from './EditComponent'
import Link from 'next/link'
import { getAllPlayers } from '@/utils/actions'


 
 const PlayerList = async () => {
    // const prisma = new PrismaClient()
    // const players = await prisma.player.findMany()

   const players = await getAllPlayers()

   if (players.length === 0) {
    return (
        <div>
             <h3 className="text-xl text-green-500 font-extrabold text-center">Player List</h3>
            <h1>No players found</h1>
        </div>
    )
    
    
   }

   return (
      <>
    <h3 className="text-xl text-green-500 font-extrabold text-center">Player List</h3>
       <div className='flex  items-between justify-between'>
       <table cellSpacing={6} cellPadding={6} className="table-auto justify-start items-start">
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>City</th>
          <th>Sport</th>
          
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
          <tr key={player.id}>
            <td>{player.id}</td>
            <td>{player.name}</td>
            <td>{player.email}</td>
            <td>{player.mobile}</td>
            <td>{player.city}</td>
            <td>{player.sport}</td>
            <td><Link href={`/player/${player.id}`} className="bg-green-500 text-sm hover:bg-orange-700 text-white font-bold py-1 px-2 rounded"> View </Link></td>
            
            <td><Link href={`/player/editPlayer/${player.id}`} className="bg-orange-500 text-sm hover:bg-orange-700 text-white font-bold py-1 px-2 rounded"> Edit </Link></td>
            <td><DeleteCompnent id={player.id} /></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  
      </>
   )
 }
 
 export default PlayerList