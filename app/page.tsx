import GetStarted from "@/components/GetStarted";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import HomePage from "@/components/HomePage";

export default async function Home() {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    // console.log(user);
  return (
       <div className="min-h-screen min-w-screen lg:bg-black bg-slate-900 opacity-90 text-white">
           <div>
            {user ? <HomePage user={user}/> :
                <GetStarted/>}
           </div>
       </div>
  );
}
