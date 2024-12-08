import AddPlayer from '@/components/AddPlayer'
import PlayerList from '@/components/PlayerList'
import React from 'react'

const Player = () => {
  return (
     <>
     <div className="flex flex-row items-start justify-center gap-4 p-6">
        <div className="w-full max-w-md p-6 border border-solid border-green-400">
            <AddPlayer />

        </div>

        <div className=" flex items-center justify-start flex-col p-6 border border-solid border-green-400 min-h-900">
            <PlayerList />

        </div>
     </div>
     </>
  )
}

export default Player