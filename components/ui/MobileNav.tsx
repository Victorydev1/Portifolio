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
        <div className='mt-32 mb-40 text-center text-2xl'>
            <Link href="/">
                <h1 className='text-4xl font-semibold'>
                    Victory<span className='text-green'>.</span>
                </h1>
            </Link>
            </div>
        <nav>
            {links.map((link, index)=> {
                return (
                <Link 
                    href={link.path}
                    key={index} 
                    className={`${
                        link.path === pathname &&
                        "text-green-300 border-b-2 border-green-300"
                    } text-xl capitalize hover:text-green-400 transition-all`}>
                    {link.name}
                </Link>
                );
            })}
        </nav>
    </SheetContent>
  </Sheet>;
}

export default MobileNav