import { todoModel, userModel } from "@/app/db/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    const data = await req.json()
    await todoModel.create({
        title: data.title,
        description: data.description
    })
    return NextResponse.json({
        message: 'Todo added!'
    })
}

export async function GET(req: NextRequest){
    const data = await req.json()
    const todos = userModel.find({
        userId: data.userId
    })

    return NextResponse.json({
        todos
    })
}