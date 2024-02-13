"use server"

import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// import { useRouter } from "next/navigation";


export async function chat(formData:FormData,currentChat:string | null,userId:string){
     let newPage = false;
   if(!currentChat){
          currentChat = (await createChat(userId)).quesId;
          newPage = true;
   }
    console.log("hehhehe");
    const input = formData.get("input");
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  
    const result = await model.generateContent(input);
    const response = await result.response;
    const text = response.text();
    const que = await db.que.create({data:{input:input as string,output:text,quesId:currentChat}});
    if(newPage) redirect(`/c/${currentChat}`);
    revalidatePath(`/c/${currentChat}`);
  
          
}

export async function createChat(userId:string){
    const ques = await db.ques.create({data:{authorId:userId}});
    return {
      quesId:ques.id as string
    }
}


export async function deleteChat(id:string,userId:string){
  // const router = useRouter();
  await db.ques.delete({where:{id:id}});
  await db.user.update({
    where: {
     userId :userId ,
    },
    data: {
      questions: {
        deleteMany: [{ id: id }],
      },
    },
   
  })

redirect("/");

  
}