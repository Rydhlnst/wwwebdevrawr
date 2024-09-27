import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import prisma from "@/app/utils/db";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Book, FileIcon, PlusCircle, Settings } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

async function getData(userId: string, blogId: string) {
    const data = await prisma.post.findMany({
        where: {
            userId: userId,
            blogId: blogId,
        },
        select: {
            title: true,
            createdAt: true,
            id: true,
        },
        orderBy: {
            createdAt: "desc"
        }
    });
    return data;
}

export default async function BlogIdRoute({params}: {params: {blogId: string}}) {
    const {getUser} = getKindeServerSession();
    const user = await getUser();

    if(!user) {
        return redirect("/api/auth/login");
    }

    const data = await getData(user.id, params.blogId)

    return (
        <div className="w-full min-h-screen py-12 bg-gray-50">
            <MaxWidthWrapper>
                <div className="flex w-full justify-end gap-x-4">
                    <Button asChild variant={"secondary"}>
                        <Link href="#"> <Book size={16} className="mr-2"/> View Blog</Link>
                    </Button>
                    <Button asChild variant={"secondary"}>
                        <Link href="#"><Settings size={16} className="mr-2"/>Settings</Link>
                    </Button>
                    <Button asChild>
                        <Link href={`/dashboard/blog/${params.blogId}/create`}>
                        <PlusCircle size={16} className="mr-2"/>
                        Create Article</Link>
                    </Button>
                </div>
                    {data === undefined || data.length === 0 ? (
                    <div className="flex flex-col w-full items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50 bg-blue-100 mt-6">
                       <div className="flex size-20 items-center justify-center rounded-full bg-white">
                           <FileIcon className="size-10 text-primary"/>
                       </div>
                       <h2 className="mt-6 text-xl font-semibold text-gray-900 text-center">You dont have any sites created</h2>
                       <p className="text-gray-900 text-center leading-tight text-muted-foreground max-w-sm mx-auto">You currently dont have any blogs. Please create some so that you can see them right here.</p>
                       <div className="flex justify-center items-center mt-4">
                           <Button asChild><Link href={"/dashboard/blog/new"} className="flex flex-row gap-3"><PlusCircle size={16}/>Create your own news</Link></Button>
                       </div>
                   </div>
                    ): (
                        <h1>here is data</h1>
                    )}

            </MaxWidthWrapper>
        </div>
    )
}