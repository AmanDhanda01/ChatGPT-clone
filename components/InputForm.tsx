"use client"
import { ArrowUp } from "lucide-react"
import { chat,createChat } from "@/server/chat"
import { useEffect, useState } from "react"
import Button from "./Button"

const InputForm = ({userId,currentChat}:{userId:string,currentChat:string | null}) => {
  // const [currentChat,setCurrentChat] = useState<String | null>(null);

  // useEffect(() =>{
  //   async function init(){
  //     if(!currentChat){
  //       const chat = await createChat(userId);
  //       setCurrentChat(chat.quesId);
  //      }  
  //   }
  //   init();
        
  // },[]);
  // console.log(currentChat);
  return (
      <form action={formData => chat(formData,currentChat,userId)} className="fixed  bg-black bottom-1 lg:bottom-2 m-0 md:mx-auto w-11/12 max-w-2xl border border-zinc-100 rounded-lg py-3 px-2 lg:px-2.5">
        <div className="w-full h-full flex items-center justify-center">
                <input className="w-[90%] h-full bg-transparent focus:outline-none" type="text" name ="input" placeholder="Message ChatGPT..." />
                <Button/>
        </div>

      </form>
  )
}

export default InputForm
