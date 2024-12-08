import React from "react";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { addPlayer } from "@/utils/actions";

const AddPlayer = () => {
 

  return (
    <>
      <h3 className="text-xl text-green-500 font-extrabold text-center">
        Add Player
      </h3>
      <form action={addPlayer} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
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
          <select id="city" name="city" required className="p-2 border rounded">
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
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Employee
        </button>
      </form>
    </>
  );
};

export default AddPlayer;
