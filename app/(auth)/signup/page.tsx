"use client"
import { Button } from "@/app/components/Button";
import { LabelledInput } from "@/app/components/LabelledInput";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useRef } from "react";

export default function signup(){
    const router = useRouter()
    const username = useRef<HTMLInputElement | null>(null)
    const password = useRef<HTMLInputElement | null>(null)
    return(
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="p-4 rounded-2xl max-w-96 flex flex-col gap-3 border">
            <span className="text-2xl font-semibold">Signup</span>
            <LabelledInput title="username" placeholder="Enter your username" type="text" reference={username} />
            <LabelledInput title="password" placeholder="Enter your password" type="text" reference={password} />
            <Button title="Signup" onClick={async()=>{
                await axios.post('http://localhost:3000/api/user',{
                    username: username.current?.value,
                    password: password.current?.value
                })
                router.push('/signin')
            }}/>
            </div>
        </div>
    )
}