import InputForm from "@/components/InputForm";
import LeftSection from "@/components/LeftSection"
import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { useSearchParams } from "next/navigation";
import Message from "@/components/Message";

type params = {
    params:{
        currentChat:string
    }
}

type queProps = {
    id: string;
    input: string;
    output: string;
    quesId: string;
}

const page = async ({params:{currentChat}}:params) => {
    const {getUser} = getKindeServerSession();
    const user = await getUser();

    const que = await db.ques.findFirst({where:{id:currentChat},include:{ques:true}});
    console.log(que);



  return (
    <div className="min-h-screen min-w-screen lg:bg-black bg-slate-900 opacity-90 text-white">
                      <div className="flex">
                            {user && <LeftSection user={user}/>}
                          <div className='flex-1 h-screen opacity-70 bg-slate-900'>
                                 <div className='m-auto w-11/12 max-w-2xl h-full flex flex-col justify-start items-center lg:items-center'>
                                      <div className='w-full  flex flex-col h-[85%]  items-center flex-wrap px-2 lg:px-4 mt-1    overflow-y-scroll whitespace-pre-line no-scrollbar'>
                                                <div className="flex flex-col ">
                                                {que?.ques.map(({id,quesId,input,output}:queProps) =>(
                                                     <Message key={id} user={user!} id={id} input={input} output={output} quesId={quesId}/>
                                                ))}
                                                </div>
                                              

                                       </div>

                                      {user &&<InputForm userId = {user.id} currentChat = {currentChat}/>}

                                 </div>


      
                            </div>

       
                      </div>
    </div>

  )
}

export default page
