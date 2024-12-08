import React from 'react'
import { PrismaClient } from '@prisma/client'
import EditComponent from '@/components/EditComponent'
import Link from 'next/link'
import { getSinglePlayer } from '@/utils/actions'

type EditPlayerPageProps = {
    params:{
      playerId: string
    }

}

const EditPlayerPage = async ({params} : EditPlayerPageProps ) => {

  const player = await  getSinglePlayer(params.playerId)
  console.log(`player in edit component ${player}`)
 
 
  return (
    <>
       
      {
        player && <EditComponent player={player} />
      }

<p className="mx-auto max-w-7xl text-center font-bold">
        <Link href="/player" className="text-green-600">
          Back to Player List
        </Link>
      </p>
       
    </>
  )
}

export default EditPlayerPage