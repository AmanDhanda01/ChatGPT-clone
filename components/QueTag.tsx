"use client"
import { deleteChat } from "@/server/chat";
import { Delete, DeleteIcon, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

type queArray = {
    queArray:{
        ques: {
            id: string;
            input: string;
            quesId: string;
        }[];
    } & {
        id: string;
        authorId: string;
        createdAt: Date;
    }
}


const QueTag =  ({queArray}:queArray) => {
   const router = useRouter();
    return (
    <div className="flex items-center justify-between group ">
        <p className="w-[90%] truncate ">{queArray.ques[0]?.input}</p>
        <button onClick={async () =>{
            await deleteChat(queArray.id,queArray.authorId)
            router.push("/")}}><Trash2 className="hidden w-3 h-3 group-hover:flex cursor-pointer " /></button>

    </div>
  )
}

export default QueTag
