'use server'

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();
export const getAllPlayers = async () => {
   
    
    return await new PrismaClient().player.findMany()
 }

export const addPlayer = async (formData: FormData) => {
    
  
    await prisma.player.create({
      data: {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        mobile: formData.get("mobile") as string,
        sport: formData.get("sport") as string,
        city: formData.get("city") as string,
      },
    });

    revalidatePath("/player");
  };

  export const editPlayer = async (formData: FormData) => {
     
    const id = formData.get("id") as string;
    await prisma.player.update({
      where: {
        id: Number(id),
      },
      data: {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        mobile: formData.get("mobile") as string,
        sport: formData.get("sport") as string,
        city: formData.get("city") as string,
      },
    });
}

 export const deletePlayer = async (formData:FormData) => {
  const playerId = formData.get("id") as string;
  await prisma.player.delete({
    where: {
      id: Number(playerId),
    },
  });
  revalidatePath("/player");
}

export const getSinglePlayer  = async (id:string) => {

 
 const player = await prisma.player.findUnique({
    where: {
      id : Number(id)
    }
  })
  return player
 
}



 
