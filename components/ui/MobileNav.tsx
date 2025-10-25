"use client";
import React from 'react'
import {Sheet, SheetContent, SheetTrigger} from "@/components/sheet"
import {usePathname} from "next/navigation"
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci"

const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'services',
        path: '/'
    },
    {
        name: 'resume',
        path: '/'
    },
    {
        name: 'work',
        path: '/'
    },
    {
        name: 'contact',
        path: '/contact'
    },
    ]
const MobileNav = () => {
    const pathname = usePathname();
  return <Sheet>
    <SheetTrigger>
        <CiMenuFries className='text-[32px] text-green' />
    </SheetTrigger>
    <SheetContent className='flex flex-col'>
        <div>logo</div>
    </SheetContent>
  </Sheet>;
}

export default MobileNav