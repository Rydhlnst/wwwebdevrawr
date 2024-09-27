"use client"

import { CreateBlogAction } from "@/app/actions";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActionState } from "react";
import { useForm } from "@conform-to/react"
import { parseWithZod } from "@conform-to/zod";
import { blogSchema } from "@/app/utils/zodSchemas";
import { useFormState } from "react-dom";

export default function NewBlogRoute() {
    const [lastResult, action] = useFormState(CreateBlogAction, undefined);
    const [form, fields] = useForm({
        lastResult,
        onValidate({formData}) {
            return parseWithZod(formData, {
                schema: blogSchema,
            })
        },

        shouldValidate: "onBlur",
        shouldRevalidate: "onInput",
    });

    return (
        <div className="bg-gray-50 text-gray-900 min-h-screen py-12">
            <MaxWidthWrapper>
                <div className="flex flex-col flex-1 items-center justify-center">
                    <Card className="max-w-full w-full">
                        <CardHeader>
                            <CardTitle>Create Blog</CardTitle>
                            <CardDescription>Create your blog here. Click the button below once your done...</CardDescription>
                        </CardHeader>
                        <form id={form.id} onSubmit={form.onSubmit} action={action}>
                                <CardContent>
                                    <div className="flex flex-col gap-y-6">
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="grid gap-2">
                                                <Label>Blog Name</Label>
                                                <Input placeholder="Blog name" name={fields.name.name} key={fields.name.key} defaultValue={fields.name.initialValue}/>
                                                <p className="text-red-500 text-sm">{fields.name.errors}</p>
                                            </div>
                                            <div className="grid gap-2">
                                                <Label>Subdirectory</Label>
                                                <Input placeholder="Subdirectory" name={fields.subdirectory.name} key={fields.subdirectory.key} defaultValue={fields.subdirectory.initialValue}/>
                                                <p className="text-red-500 text-sm">{fields.subdirectory.errors}</p>

                                            </div>
                                            <div className="grid col-span-2 gap-2">
                                                <Label>Description</Label>
                                                <Textarea placeholder="Small description for your site." name={fields.description.name} key={fields.description.key} defaultValue={fields.description.initialValue}/>
                                                <p className="text-red-500 text-sm">{fields.description.errors}</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button>Submit</Button>
                                </CardFooter>
                        </form>
                    </Card>
                </div>
            </MaxWidthWrapper>
        </div>
        
    )
}