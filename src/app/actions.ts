"use server"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import {parseWithZod} from "@conform-to/zod"
import { blogSchema, PostSchema } from "./utils/zodSchemas";
import prisma from "./utils/db";
import { requireUser } from "./utils/requireUser";

export async function CreateBlogAction(prevState: any ,formData: FormData) {
    const user = await requireUser();

    const submission = parseWithZod(formData, {
        schema: blogSchema,
    });

    if (submission.status !== "success") {
        return submission.reply();
      }

    const response = await prisma.blog.create({
        data: {
            description: submission.value.description,
            name: submission.value.name,
            subdirectory: submission.value.subdirectory,
            userId: user.id
        }
    })

    return redirect("/dashboard/blog")
}

export async function CreatePostAction(prevStete: any, formData: FormData) {
    const user = await requireUser();

    const submission = parseWithZod(formData, {
        schema: PostSchema,
    });

    if(submission.status !== "success" ){
        return submission.reply();
    }

    const data = await prisma.post.create({
        data: {
            title: submission.value.title,
            smallDescription: submission.value.smallDescription,
            slug: submission.value.slug,
            articleContent: JSON.parse(submission.value.articleContent),
            userId: user.id,
            blogId: formData.get("blogId") as string,
        },
    });

    return redirect(`/dashboard/sites/${formData.get('blogId')}`)
}