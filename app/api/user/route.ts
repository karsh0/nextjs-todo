import { NextRequest, NextResponse } from "next/server";
import { userModel, todoModel } from "../../db/db"

export async function POST(req: NextRequest){
    const data = await req.json()

    await userModel.create({
        username: data.username,
        password: data.password
    })

    return NextResponse.json({
        data
    })
}