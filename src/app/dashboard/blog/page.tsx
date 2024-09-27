import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import prisma from "@/app/utils/db";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { FileIcon, PlusCircle } from "lucide-react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Item } from "@radix-ui/react-navigation-menu";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import DefaultImage from "../../../../public/default.png"
import BlogContent from "@/app/components";

async function getData(userId: string) {
    const data = await prisma.blog.findMany({
        where: {
            userId: userId,

        },
        orderBy: {
            createdAt: "desc",
        }
    });
    return data;
}

export default async function Blog() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if(!user) {
        return redirect("/api/auth/login");
    }

    const data = await getData(user.id);
    return (
        <div className="bg-gray-50 text-gray-900">
            <MaxWidthWrapper>
                <section className="relative w-full  flex flex-col flex-1 flex-grow items-center py-12 gap-12">
                    <div className="text-center flex flex-col gap-3">
                        <h1 className="text-4xl md:text-6xl font-bold">
                        Latest news of <span className="text-blue-500">Innovation</span>
                        </h1>
                        <p className="text-lg md:text-xl">
                        Discover the latest insights, trends, and technologies driving innovation today.
                        </p>
                    </div>                         
                    <BlogContent/>
                    <div className="flex flex-col w-full gap-3">
                        <div className="flex justify-center items-center">
                            <Button asChild><Link href={"/dashboard/blog/new"} className="flex flex-row gap-3"><PlusCircle size={16}/>Create your own news</Link></Button>
                        </div>
                        {data === undefined || data.length === 0 ? (
                            <div className="flex flex-col w-full items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50 bg-blue-100">
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
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                                {data.map((Item) => (
                                    <Card key={Item.id}>
                                        <Image src={Item.imageUrl ?? DefaultImage} alt={Item.name} className="rounded-t-lg object-cover w-full h-[200px]" width={400}/>
                                        <CardHeader>
                                            <CardTitle>
                                                {Item.name}
                                            </CardTitle>
                                            <CardDescription>
                                                {Item.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardFooter>
                                            <Button asChild className="w-full">
                                                <Link href={`/dashboard/blog/${Item.id}`}>View Articles</Link>
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </MaxWidthWrapper>
            
        </div>
    )
}