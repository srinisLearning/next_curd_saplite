import React from "react";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
type Player = {
  name: string;
  email: string;
  mobile: string;
  sport: string;
  city: string;
  id: string;
};

const EditComponent = ({ player }: any) => {
  const { name, email, mobile, sport, city, id } = player;
  console.log(player);
  const editPlayer = async (formData: FormData) => {
    "use server";
    const id =  formData.get("id") 
    const name = formData.get("name") as string;
    const email = formData.get("email")as string;
    const mobile = formData.get("mobile")as string;
    const sport = formData.get("sport") as string;
    const city = formData.get("city") as string;
    const primsa = new PrismaClient();
    await primsa.player.update({
      where: {
        id: Number(id?.toString()),
      },
      data: {
        name: name,
        email: email,
        mobile: mobile,
        sport: sport,
        city: city,
      },
    });
    redirect("/player");
  };
  return (
    <>
      <div className="flex flex-col mx-auto max-w-xl w-full px-4 py-8 space-y-4 m-4 bg-white rounded-lg shadow-md">
        <h2 className="text-center text-2xl text-green-600 font-extrabold">
          Edit Component
        </h2>

        <form action={editPlayer} className="space-y-4">
          <div className="flex flex-col">
            <input type='hidden' name='id' value={id} />
            <label htmlFor="name" className="mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              defaultValue={name}
              required
              className="p-2 border rounded"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              defaultValue={email}
              required
              className="p-2 border rounded"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="mobile" className="mb-2">
              Mobile
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              placeholder="Mobile"
              defaultValue={mobile}
              required
              className="p-2 border rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="sport" className="mb-2">
              Sport
            </label>
            <select
              id="sport"
              name="sport"
              defaultValue={sport}
              required
              className="p-2 border rounded"
            >
              <option value="">Select Sport</option>
              <option value="Football">Football</option>
              <option value="Cricket">Cricket</option>
              <option value="Hockey">Hockey</option>
              <option value="Tennis">Tennis </option>
              <option value="Volleyball">Volleyball </option>
              <option value="Basketball">Basketball </option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="city" className="mb-2">
              City
            </label>
            <select
              id="city"
              name="city"
              defaultValue={city}
              required
              className="p-2 border rounded"
            >
              <option value="">Select City</option>
              <option value="Chennai">Chennai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Hyderabad">Hyderbad</option>
            </select>
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded text-center"
          >
            EditEmployee
          </button>
        </form>
      </div>
    </>
  );
};

export default EditComponent;
