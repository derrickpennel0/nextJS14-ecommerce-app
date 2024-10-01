import Product from "@/libs/models/Product";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, URLParams: any) {
  try {
    const id = URLParams.params.id;

    await connectMongoDB();

    await Product.findByIdAndDelete(id);

    return NextResponse.json({ msg: "Product deleted Successfully", status: 201 });
  } catch (err) {
    return NextResponse.json({ err, msg: "Something went wrong" }, { status: 400 });
  }
}
