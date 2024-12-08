import React from "react";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { deletePlayer } from "@/utils/actions";

const DeleteComponent = ({ id }: any) => {
  // const deletePlayer = async () => {
  //   "use server";
  //   const prisma = new PrismaClient();
  //   await prisma.player.delete({
  //            where: {
  //              id: id,
  //            },
  //          });
    

  //      revalidatePath("/player");
     
  // };

   
  return (
    <>
      <form action={deletePlayer}>
        <input type="hidden" name="id" value={id} />
        <button
          type="submit"
          className="bg-red-500 text-sm hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        >
          Delete
        </button>
      </form>
    </>
  );
};

export default DeleteComponent;
