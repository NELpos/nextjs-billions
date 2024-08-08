import Image from "next/image";
import { API_URL } from "../constants";
import Person from "@/components/person";

async function getBillions() {
  const response = await fetch(API_URL)
  const json = await response.json()
  return json
}

export default async function Home() {
  const billions = await getBillions();
  return (
    <div className="bg-neutral-700 flex flex-col items-center justify-between min-h-screen p-6">
      <div className=" grid grid-cols-4 gap-4">
        {billions.map((billion) => (
          <Person key={billion.id} id={billion.id} name={billion.name} squareImage={billion.squareImage} netWorth={billion.netWorth} industries={billion.industries}  />
          ))}
      </div>
    </div>
  );
}
