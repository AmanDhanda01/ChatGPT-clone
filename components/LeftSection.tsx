import { db } from "@/db";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image"

import Avatar from 'react-avatar';
import QuesList from "./QuesList";
import { LogOut } from "lucide-react";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";

type User = {
  user:KindeUser
}

const LeftSection = async ({user:profile}:User) => {

       let dbuser = await db.user.findFirst({where:{userId:profile.id}});
       if(!dbuser){
          dbuser = await db.user.create({data:{
          userId:profile.id,
          email:profile.email!,
          firstName:profile.given_name!,
          lastName:profile.family_name!,
          }})
       }

       console.log(dbuser);
       



  // const userQues = await db.user.findFirst({where:{id:"65c79f6e9e739f8a627e3b67"},include:{questions:true}});
  // const ques = await db.ques.findFirst({where:{id:userQues?.questions[0].id},include:{ques:true}});
  // console.log(ques);
  return (
    <div className='h-screen hidden w-[17%] bg-black  md:flex md:flex-col items-start justify-betwwen text-white py-5 pl-3 rounded-md'>
           <div className="flex space-x-2 items-center justify-start">
               <Image src="/ChatGPT-Logo.jpg" className="rounded-full" width={30} height={30} alt="Logo"/>
               <p className="font-semibold text-md">ChatGPT</p>
           </div>
           <div className="flex-1 w-full justify-start  pl-1 pt-5">
                       <QuesList dbuser={dbuser}/>  
           </div>
            <div className="w-full px-1 flex items-center justify-between group">
                 <div className="flex space-x-1 items-center">
                       <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${dbuser.firstName + " " + dbuser.lastName}`} className="w-8 h-8 rounded-full" alt="" />
                       <p className="text-sm font-semibold">{dbuser.firstName + " " + dbuser.lastName}</p>
                 </div>
                 <LogoutLink><LogOut className="hidden group-hover:inline-block h-5 w-5 mr-3 "/></LogoutLink>




            </div>
      
    </div>
  )
}

export default LeftSection
