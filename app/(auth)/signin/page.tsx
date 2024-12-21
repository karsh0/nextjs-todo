"use client"
import { Button } from "@/app/components/Button";
import { LabelledInput } from "@/app/components/LabelledInput";
import { useRouter } from "next/navigation";
import React from "react";
import { useRef } from "react";

export default function signin(){
    const router = useRouter()
    const username = useRef<HTMLInputElement | null>(null)
    const password = useRef<HTMLInputElement | null>(null)
    return(
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="p-4 rounded-2xl max-w-96 flex flex-col gap-3 border">
            <span className="text-2xl font-semibold">signin</span>
            <LabelledInput title="username" placeholder="Enter your username" type="text" reference={username} />
            <LabelledInput title="password" placeholder="Enter your password" type="text" reference={password} />
            <Button title="signin" onClick={()=>{
                router.push('/home')
            }}/>
            </div>
        </div>
    )
}