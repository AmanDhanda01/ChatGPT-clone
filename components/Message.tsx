import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import Image from "next/image"
type messageProps = {
       
       
        id: string;
        input: string;
        output: string;
        quesId: string;
        user:KindeUser
       
}

const Message = ({input,output,id,quesId,user}:messageProps) => {
  return (
    <div className="text-white flex flex-col space-y-5 mb-5">
          <div className="flex space-x-3 items-center font-semibold">
                  <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.given_name + " " + user.family_name}`} className="w-8 h-8 rounded-full float-left" alt="Logo" />  
                  <p>{input}</p>

          </div>

          <div className="">

                 <Image src="/ChatGPT-Logo.jpg" width={30} height={30} className="rounded-full float-left mr-3" alt="Logo"/>
                 <p>{output}</p>
          </div>
    </div>
  )
}

export default Message
