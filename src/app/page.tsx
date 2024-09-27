import Image from "next/image";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { getKindeServerSession, LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import gambarHome from "../../public/Rectangle 44.jpg"

export default async function Home() {
  const {getUser} = getKindeServerSession()
  const session = await getUser()
  return ( <>
      <div className="grid grid-rows-4 h-[100vh]">
        <div className="relative w-full row-span-3">
          <Image src={gambarHome} alt="" className="w-full h-full object-cover"/>
          <MaxWidthWrapper>
            <div className="absolute  inset-0 flex flex-col gap-6 items-center justify-center bg-black bg-opacity-50">
              <h2 className="text-white text-6xl font-bold max-w-5xl text-center">Empowering Human and Technology to Create Innovation.</h2>

          </div>
        </MaxWidthWrapper>
        <MaxWidthWrapper>
          <div className="w-full flex h-full justify-between items-center my-6 row-span-1">
            <div>
              <h2 className="text-2xl font-semibold">Unlock Your Potential in Technology: Learn, Innovate, and Lead</h2>
            </div>
          <div className="flex flex-row gap-x-3">
            <LoginLink>
              <Button variant={"secondary"} size={"lg"}>Login</Button>
            </LoginLink>
            <RegisterLink>
                <Button variant={"ghost"} size={"lg"}>Sign up</Button>
            </RegisterLink>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      
        
      {/* <MaxWidthWrapper>
          <div className="min-h-screen w-full flex flex-col gap-3 items-center justify-center">
            <div>
              <p className="text-4xl text-center text-gray-800 font-semibold">Explore the latest innovations, create innovative content, and get consultation from technology experts.</p>
            </div>
            <div className="flex flex-row gap-3">
              <LoginLink>
                <Button variant={"default"}>Login</Button>
              </LoginLink>
              
            </div>
          </div>
        </MaxWidthWrapper> */}
      </div>
        
        </>
  );
}
