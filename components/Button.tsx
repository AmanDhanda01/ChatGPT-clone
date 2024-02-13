"use client"
import { ArrowUp, Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";



const Button = () => {
    const {pending} = useFormStatus();
  return (
    <>
            {(pending ? <Loader2 className="h-6 w-6 ml-2 animate-spin"/> :<button type="submit" className="w-[10%] full flex justify-center"><ArrowUp className="text-center"/></button>)}

    </>

  )
}

export default Button
