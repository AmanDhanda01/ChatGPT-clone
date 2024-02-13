import InputForm from "./InputForm"
import Image from "next/image"
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import { Prisma } from "@prisma/client";
import { createChat } from "@/server/chat";
import { db } from "@/db";

type User = {
   user:KindeUser
 }
const RightSection = async ({user}:User) => {
//    const currentChat = await createChat(user.id);
   
//    const que = await db.que.findMany({where:{quesId:currentChat.quesId}});

//   console.log(que);


    
  return (
    <div className='flex-1 h-screen opacity-70 bg-slate-900'>
        <div className='m-auto w-11/12 max-w-2xl h-full flex flex-col justify-start items-center lg:items-center'>
             <div className='w-full  flex flex-col justify-center items-center flex-wrap px-2 py-1 lg:px-4 lg:py-2 mt-auto mb-auto lg:mt-36 overflow-y-hidden '>
                      <div className="flex flex-col justify-center items-center space-y-5">
                             <Image src="/ChatGPT-Logo.jpg" width={60} height={60} className="rounded-full" alt="Logo"/>
                             <p className="text-lg md:text-xl lg:text-2xl font-semibold">How can i help you today?</p>
                      </div>

                      <div className="hidden w-full mt-32 lg:grid grid-cols-2 grid-rows-2 gap-5">
                            <div className="rounded-md border border-zinc-50 p-2">
                               <p className="text-sm font-semibold">Help me pick</p>
                               <p className="text-xs ">a gift for my dad who loves fishing</p>
                            </div>
                            <div className="rounded-md border border-zinc-50 p-2">
                               <p className="text-sm font-semibold">Compare business stratagies</p>
                               <p className="text-xs">for transitioning from budget to luxury</p>
                            </div>
                            <div className="rounded-md border border-zinc-50 p-2">
                               <p className="text-sm font-semibold">Show me a code snippet</p>
                               <p className="text-xs">of a website sticky header</p>
                            </div>
                            <div className="rounded-md border border-zinc-50 p-2">
                               <p className="text-sm font-semibold">Help me pick</p>
                               <p className="text-xs">a gift for my dad who loves fishing</p>
                            </div>
                      </div>


             </div>

             <InputForm userId = {user.id} currentChat = {null}/>

        </div>


      
    </div>
  )
}

export default RightSection
