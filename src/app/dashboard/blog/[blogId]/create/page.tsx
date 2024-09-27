"use client"

import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeftIcon, Atom, icons } from "lucide-react";
import Link from "next/link";
import { useActionState, useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import TailwindEditor from "@/app/components/dashboard/EditorWrapper";
import { JSONContent } from "novel";
import { CreatePostAction } from "@/app/actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { PostSchema } from "@/app/utils/zodSchemas";
import { useFormState } from "react-dom";
import slugify from "react-slugify"
import { UploadDropzone } from "@/app/utils/uploadthing";

export default function ArticleCreationRoute({params}: {params: {blogId: string}}) {
    const [imageUrl, setImageUrl] = useState<undefined | string>(undefined);
    const [value, setValue] = useState<JSONContent | undefined>(undefined);
    const [slug, setSlugValue] = useState<undefined | string>(undefined)
    const [title, setTitle] = useState<undefined | string>(undefined);
    const [lastResult, action] = useFormState(CreatePostAction, undefined);
    const [form, fields] = useForm({
        lastResult,
        onValidate({formData}) {
            return parseWithZod(formData, {schema: PostSchema})
        },

        shouldValidate: "onBlur",
        shouldRevalidate: "onInput",
    });

    function handleSlugGeneration() {
        const titleInput = title;
        if(titleInput?.length === 0 || titleInput === undefined) {
            return toast.error("Please create a title first");
        }

        setSlugValue(slugify(titleInput));

        return toast.success("Slug has been created");
    }
    return (
        <div className="w-full min-h-screen py-12 bg-gray-50">
            <MaxWidthWrapper>
                <div className="flex items-center">
                    <Button size="icon" variant={"outline"} className="mr-3" asChild>
                        <Link href={`/dashboard/blog/${params.blogId}`}><ArrowLeftIcon size={16}/></Link>
                    </Button>
                    <h1 className="text-xl font-semibold">Create Article</h1>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>
                            Article Details
                        </CardTitle>
                        <CardDescription>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quasi ipsam voluptate aperiam vero perferendis maxime.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="flex flex-col  gap-6" id={form.id} onSubmit={form.onSubmit} action={action}>
                            <input type="hidden" name="blogId" value={params.blogId}/>
                            <div className="grid gap-2">
                                <Label>Title</Label>
                                <Input placeholder="Next.JS blogging application" key={fields.title.key} name={fields.title.name} defaultValue={fields.title.initialValue}
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                                />
                                <p className="text-red-500">{fields.title.errors}</p>
                            </div>

                            <div className="grid gap-2">
                                <Label>Slug</Label>
                                <Input key={fields.slug.key} name={fields.slug.name} defaultValue={fields.slug.initialValue} placeholder="Article Slug"
                                onChange={(e) => setSlugValue(e.target.value)} value={slug}
                                />
                                <Button className="w-fit" variant={"secondary"} type="button" onClick={handleSlugGeneration}>
                                    <Atom className="size-4 mr-2"/>
                                    Generate slug
                                </Button>
                                <p className="text-red-500">{fields.slug.errors}</p>
                            </div>

                            <div className="grid gap-2">
                                <Label>Small Description</Label>
                                <Textarea key={fields.smallDescription.key} name={fields.smallDescription.name} defaultValue={fields.smallDescription.initialValue} placeholder="Small Description for your blog articles..." className="h-32"/>
                                <p className="text-red-500">{fields.smallDescription.errors}</p>
                            </div>

                            {/* <div className="grid gap-2">
                                <Label>Cover Image</Label>
                                <input type="hidden" name={fields.coverImage.name} key={fields.coverImage.key} defaultValue={fields.coverImage.initialValue} value={imageUrl}/>
                                {imageUrl ? (
                                    <Image src={imageUrl} alt="Uploaded Image" className="object-cover" width={200} height={200}/>
                                ): (
                                    <p className="text-gray-500">No image uploaded yet (Optional)</p>
                                )}
                                <UploadDropzone endpoint="imageUploader" onClientUploadComplete={(res) => {setImageUrl(res[0].url);
                                    toast.success("Image has been uploaded")
                                }}  onUploadError={()=>{
                                    
                                    toast.error("Something went wrong...")
                                }}
                                
                                
                                />
                                {fields.coverImage.errors && <p className="text-red-500">{fields.coverImage.errors}</p>}
                            </div> */}

                            <div className="grid gap-2">
                                <Label>Article Content</Label>
                                <input type="hidden" name={fields.articleContent.name} key={fields.articleContent.key} defaultValue={fields.articleContent.initialValue} value={JSON.stringify(value)}/>
                                <TailwindEditor onChange={setValue} initialValue={value}/>
                                <p className="text-red-500">{fields.articleContent.errors}</p>
                            </div>
                            <Button className="w-fit">Submit</Button>
                        </form> 
                    </CardContent>
                </Card>
            </MaxWidthWrapper>
        </div>
    )
}