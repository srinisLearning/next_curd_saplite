import React from "react";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { editPlayer } from "@/utils/actions";
type Player = {
  name: string;
  email: string;
  mobile: string;
  sport: string;
  city: string;
  id: string;
};

const ViewComponent = ({ player }: any) => {
  const { name, email, mobile, sport, city, id } = player;
  console.log(`player in edit component ${player}`);
  
  return (
    <>
      <div className="flex flex-col mx-auto max-w-xl w-full px-4 py-8 space-y-4 m-4 bg-white rounded-lg shadow-md">
        <h2 className="text-center text-2xl text-green-600 font-extrabold">
          Player Details
        </h2>

        <form action= '{ editPlayer }' className="space-y-4">
          <div className="flex flex-col">
            <input type='hidden' name='id' value={id} />
            <label htmlFor="name" className="mb-2">
              {name}
            </label>
            
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2">
              {email}
            </label>
              
          </div>

          <div className="flex flex-col">
            <label htmlFor="mobile" className="mb-2">
              {mobile}
            </label>
             
          </div>
          <div className="flex flex-col">
            <label htmlFor="sport" className="mb-2">
              {sport}
            </label>
          
          </div>
          <div className="flex flex-col">
            <label htmlFor="city" className="mb-2">
             {city}
            </label>
             
          </div>
 
        </form>
      </div>
    </>
  );
};

export default ViewComponent;
