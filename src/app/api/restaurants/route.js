import restaurantModel from "@/app/lib/restaurantModel";
import { connect } from "mongoose";
import { connectionSrt } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    await mongoose.connect(connectionSrt, { useNewUrlParser: true });
    const data=await restaurantschema.find()
    console.log(data);

    return NextResponse.json({ result: true });
}
