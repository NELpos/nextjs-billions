

import PersonInfo from "@/components/person-info";
import { Suspense } from "react";
  
// export async function generateMetadata({params : {id}} : IParams){
//     // const movie = await getMovie(id);
//     // return {
//     //   title: movie.title,
//     // };
// }

export default async function PersonDetail({params} : {params : {id:string};}) {
    return(
        <div className="bg-neutral-900 flex flex-col items-center justify-between min-h-screen p-6">
            <PersonInfo id={params.id}/>
        </div>

    )
}