
"use client";

import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

interface BillionProps {
    name : string
    id : string
    squareImage : string
    netWorth : number
    industries : string[]
}

export default function Person({id, name, squareImage, netWorth, industries} : BillionProps) {
    const onClick = () => {
        redirect(`/person/${id}`);
    }

    if(squareImage.includes("undefined"))
        return null

    return (
        <div className="w-full text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link prefetch href={`/person/${id}`}>
            <Image className="w-full rounded-t-lg" src={`${squareImage}`} alt={name} onClick={onClick} width={200} height={200} />
            <div className="m-1 text-sm font-semibold dark:text-white">
                {name}
            </div>
            <div className="text-xs dark:text-white">{Math.floor(netWorth/1000)} billion / {industries[0]} </div>
            </Link>
        </div>
    ) 
}