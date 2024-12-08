import React from "react";

import { PrismaClient } from "@prisma/client";

const prismaHandlers = async () => {
  const prisma = new PrismaClient();
  await prisma.player.create({
    data: {
      name: "rohit",
      mobile: "1234567890",
      email: "rohit@gmail.com",
      sport: "cricket",
      city: "chennai",
      //isActive: true // Add the isActive property
    },
  });

  const allPlayers = await prisma.player.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return {
    allPlayers,
  };
};

const PrismaExample = async () => {
  const { allPlayers } = await prismaHandlers();
  console.log(allPlayers);
  return (
    <>
      <h2 className="text-4xl text-green-600 text-center p-6">
        Prisma Example
      </h2>
      <div className="flex flex-col flex-gap-6 p-4">
        {allPlayers.map((player) => (
          <div key={player.id} className="flex flex-row gap-6 p-4">
            {player.name}

            {player.mobile}

            {player.email}

            {player.sport}

            {player.city}

            {/*  {player.isActive}*/}
          </div>
        ))}
      </div>
    </>
  );
};

export default PrismaExample;
