import Product from "@/libs/models/Product";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongoDB();

    const data = await Product.find();
    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    return NextResponse.json({ err, msg: "Something went wrong" }, { status: 400 });
  }
}
