import { db } from "@/db";
import QueTag from "./QueTag";
import  Link  from "next/link";

type User = {
    dbuser:{
        id: string;
        userId: string;
        email: string;
        firstName: string;
        lastName: string;
    }

}

const QuesList = async ({dbuser}:User) => {

    const result = await db.ques.findMany({where:{authorId:dbuser.userId},include:{ques:true}})
    // console.log(result);
  return (
    <div className="w-full px-3 py-1 text-sm flex flex-col gap-3">
         {result.sort((a,b) => b.createdAt.getTime()-a.createdAt.getTime()).map((queArray) =>(
           <Link key={queArray.id} href={`/c/${queArray.id}`}>
             <QueTag  queArray={queArray}/>
            </Link>
         ))}
    </div>
  )
}

export default QuesList
