import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "@/components/icons";
import Link from "next/link";
import React from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NavigationMenuItem, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";
import { CircleUser, Hand, HandHelping, HomeIcon, icons, Info, InfoIcon, Navigation } from "lucide-react";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Home, Newspaper } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

export default async function Navbar() {
  const {getUser} = getKindeServerSession()
  const session = await getUser()
    return <>
        <div className="bg-white sticky-z-50 top-0 inset-x-0 text-gray-900">
            <header className="relative bg-white">
                <MaxWidthWrapper>
                    <div className="border-b border-slate-200">
                        <div className="flex flex-row justify-between h-16 items-center">
                            <div className="ml-4 flex gap-6 lg:ml-0">
                                <Link href="/">
                                    <Icons.logo className="h-10 w-10"/>
                                </Link>
                                <NavigationMenu className="flex w-full items-center justify-items-center">
                                <NavigationMenuList  className="flex flex-row items-center gap-3">
                                    <NavigationMenuItem>
                                      <Link href="/dashboard">
                                        <Button variant={"ghost"} className="flex flex-row gap-3 text-md text-gray-600 hover:text-blue-500"><HomeIcon size={18}/>Home</Button>
                                      </Link>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                      <Link href="/dashboard/about">
                                        <Button variant={"ghost"} className="flex flex-row gap-3 text-md text-gray-600 hover:text-blue-500"><Info size={18}/>About</Button>
                                      </Link>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                      <Link href="/dashboard/blog">
                                        <Button variant={"ghost"} className="flex flex-row gap-3 text-md text-gray-600 hover:text-blue-500"><Newspaper size={18}/>Blog</Button>
                                      </Link>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                      <Link href="/dashboard/service">
                                        <Button variant={"ghost"} className="flex flex-row gap-3 text-md text-gray-600 hover:text-blue-500"><HandHelping size={18}/>Service</Button>
                                      </Link>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                            </div>
                              {session ? (
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button variant={"ghost"} className="rounded-full">
                                        <CircleUser size={20}/>
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                      <DropdownMenuItem asChild>
                                        <LogoutLink>
                                          <Button variant={"secondary"} className="shadow px-10">Log out</Button>
                                        </LogoutLink>
                                      </DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                              ): (
                                <div className="flex flex-row gap-3">
                                <LoginLink>
                                  <Button className="text-md">Login</Button>
                                </LoginLink>
                                <RegisterLink>
                                  <Button variant={"ghost"} className="text-md">Sign up</Button>
                                </RegisterLink>
                              </div>
                              )}
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    </>
}
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"