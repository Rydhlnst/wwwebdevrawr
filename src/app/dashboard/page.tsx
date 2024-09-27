import Image from "next/image";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const {getUser} = getKindeServerSession()
  const session = await getUser()
  return ( <>
      <div className="bg-gray-50 text-gray-900 min-h-screen">
        <MaxWidthWrapper>
        <div className="flex flex-col gap-6 min-h-screen text-center mx-auto text-gray-800 items-center justify-center">
          <h1 className="text-7xl font-bold tracking-tight max-w-7xl">Empowering <span className="text-blue-600">Human</span> and <span className="text-blue-600">Technology</span> to create innovation.</h1>
          <p className="text-2xl text-gray-600 font-light">In today's fast-paced digital world, mastering technology is more important than ever. Whether you're just starting out or looking to expand your skills, our comprehensive learning platform is designed to guide you on your journey toward becoming a tech-savvy leader.</p>
        </div>
        <div className="w-full flex flex-col gap-12 items-center justify-start pt-12 pb-20">
          <h2 className="text-3xl font-bold">Why Us?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Expert Guidance</strong>: Learn from industry
                professionals who are at the forefront of technological
                innovation.
              </li>
              <li>
                <strong>Hands-On Experience</strong>: Gain practical skills
                through real-world projects, ensuring you're prepared for the
                challenges of tomorrow.
              </li>
              <li>
                <strong>Cutting-Edge Topics</strong>: Stay ahead of the curve
                with courses covering AI, blockchain, cloud computing,
                cybersecurity, and more.
              </li>
              <li>
                <strong>Flexible Learning</strong>: Study at your own pace with
                resources available 24/7, tailored to fit your busy schedule.
              </li>
            </ul>
          </div>
      
        </MaxWidthWrapper>
        
        </div>
        
        
        </>
  );
}
