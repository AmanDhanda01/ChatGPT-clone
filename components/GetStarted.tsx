
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components"
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { ReactNode } from "react";

const GetStarted= ():ReactNode => {
  return (
    <div className="flex flex-col gap-y-3 items-center justify-center pt-[15%]">
                     <Image src="/ChatGPT-Logo.jpg" width={50} height={50} className="rounded-full" alt="Logo"/>
                      <p className="text-3xl font-semibold">Get Started</p>
                     <div className="flex gap-x-3">
            
                            <LoginLink className={buttonVariants()} >Sign in</LoginLink>
                            <RegisterLink className={buttonVariants()}>Sign up</RegisterLink>
                     </div>
    </div>
  )
}

export default GetStarted
