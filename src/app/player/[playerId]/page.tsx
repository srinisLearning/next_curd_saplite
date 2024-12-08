import React from "react";
import { PrismaClient } from "@prisma/client";
import ViewComponent from "@/components/ViewComponent";
import Link from "next/link";
import { getSinglePlayer } from "@/utils/actions";

type SinglePlayerPageProps = {
  params: {
    playerId: string;
  };
};

const SinglePlayerPage = async ({ params }: SinglePlayerPageProps) => {
  const player = await getSinglePlayer(params.playerId);
  console.log(`player in edit component ${player}`);

  return (
    <>
      {player && <ViewComponent player={player} />}

      <p className="mx-auto max-w-7xl text-center font-bold">
        <Link href="/player" className="text-green-600">
          Back to Player List
        </Link>
      </p>
    </>
  );
};

export default SinglePlayerPage;
