import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import LeftSection from "./LeftSection";
import RightSection from "./RightSection"; 
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";

type User = {
  user:KindeUser
}

async function HomePage({user}:User) {

  return (
    <div className="flex">
        <LeftSection user={user}/>
        <RightSection user={user}/>
           
    </div>
  )
}

export default HomePage
